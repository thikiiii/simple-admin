import { defineStore } from 'pinia'
import { UserApi } from '@/services/api/user'
import { AuthCookie } from '@/storage/auth'
import { Message,Notification } from '@arco-design/web-vue'
import router from '@/router'
import { Settings } from '@/settings'
import { RouteAuthModeEnum } from '@/enums/auth'
import { RouterHelpers } from '@/router/helpers'
import useTabBarStore from '@/store/modules/tabBar'

const useAuthStore = defineStore('Auth', {
    state: (): AuthStore => ({
        token: AuthCookie.getToken() ,
        // 角色
        roles: [],
        // 细粒度权限
        permissions: [],
        // 用户信息
        userinfo: null,
        // 路由鉴权模式
        routeAuthMode: Settings.routeAuthMode,
        // 是否已生成路由
        isGeneratedRoutes: false,
        // 用户的路由
        routes: []
    }),
    getters: {
        // 是否登录
        isLogin: state => Boolean(state.token),

        // 是否有鉴权
        isAuth: state => Boolean(state.roles.length) && Boolean(state.userinfo)
    },
    actions: {
        // 初始化
        initAuthStore() {
            this.removeToken()
            this.$reset()
            console.log(this.$state)
        },

        // 初始路由
        initRoute() {
            this.routes = []
            this.isGeneratedRoutes = false
        },

        // 设置 Token
        setToken(token) {
            this.token = token
            AuthCookie.setToken(token)
        },

        // 删除 Token
        removeToken() {
            this.token = null
            AuthCookie.removeToken()
        },

        // 密码登录
        async passwordLogin(form: UserApiRequest.PasswordLogin) {
            const { subCode,token,subMsg } = await UserApi.passwordLogin(form).catch(() =>Promise.reject())
            if (subCode !== 200 || !token) {
                Message.error(subMsg)
                return Promise.reject()
            }
            this.setToken(token)
            await this.handleLoginAfter()
            return Promise.resolve()
        },

        // 获取用户信息
        async getUserinfo() {
            const { subCode,result,subMsg } = await UserApi.getUserinfo().catch(() => Promise.reject())
            if (subCode !== 200 || !result) {
                Message.error(subMsg)
                return Promise.reject()
            }
            this.roles = result.roles
            this.permissions = result.permissions
            this.userinfo = result.userinfo
        },

        async getUserRoutes() {
            const { subCode, subMsg, result } = await UserApi.getRoutes().catch(() => Promise.reject())
            if (subCode !== 200 || !result) {
                Message.error(subMsg)
                return Promise.reject()
            }
            this.routes = result
        },

        // 处理登录后
        async handleLoginAfter() {
            await this.getUserinfo()

            switch (this.routeAuthMode) {
                case RouteAuthModeEnum.FRONT:
                    this.initFrontRouteAuth()
                    break
                case RouteAuthModeEnum.SERVER:
                    await this.initServerRouteAuth()
                    break
            }

            const redirect = router.currentRoute.value.query.redirect
            await router.replace(redirect as string || Settings.homePath)
            Notification.success({
                title: '登录成功',
                content: `欢迎回来，${ this.userinfo?.username }！`
            })
        },

        // 初始化前端路由权限
        initFrontRouteAuth() {
            // 获取用户路由
            this.routes = RouterHelpers.getUserRouteList(this.roles)
            // 自定义路由转Vue路由
            const vueRoutes = RouterHelpers.transformCustomRoutesToVueRoutes(this.routes)
            // 添加路由
            vueRoutes.forEach(route => router.addRoute(route))

            const tabBarStore = useTabBarStore()
            tabBarStore.initTabBar(this.routes)
            this.isGeneratedRoutes = true
        },

        // 初始化服务端路由权限
        async initServerRouteAuth() {
            await this.getUserRoutes()
            // 自定义路由转Vue路由
            const vueRoutes = RouterHelpers.transformCustomRoutesToVueRoutes(this.routes)
            // 添加路由
            vueRoutes.forEach(route => router.addRoute(route))

            this.isGeneratedRoutes = true
        },

        // 处理菜单跳转
        handleMenuJumps(menu:Route.RouteRecordRaw) {
            console.log(menu)
            RouterHelpers.isExternalLink(menu.path) ? RouterHelpers.openTheLink(menu.path) : router.push(menu.path)
        }
    }
})

export default useAuthStore
