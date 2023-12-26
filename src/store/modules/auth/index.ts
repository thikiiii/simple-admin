import { defineStore } from 'pinia'
import { UserApi } from '@/services/api/user'
import { AuthCookie } from '@/storage/auth'
import { message,notification } from 'ant-design-vue'
import router from '@/router'
import { RouteAuthModeEnum } from '@/enums/auth'
import { RouterHelpers } from '@/router/helpers'
import RouterConfig from '@/config/router'
import Hint from '@/config/hint'


const useAuthStore = defineStore('Auth',{
    state: (): AuthStore => ({
        token: AuthCookie.getToken(),
        // 角色
        roles: [],
        // 细粒度权限
        permissions: [],
        // 用户信息
        userinfo: null,
        // 路由鉴权模式
        routeAuthMode: RouterConfig.ROUTE_AUTH_MODE,
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
            this.$reset()
            this.removeToken()
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
            const { code,token,msg } = await UserApi.passwordLogin(form).catch(() => {
                this.initAuthStore()
                return Promise.reject()
            })
            if (code !== 200 || !token) {
                message.error(msg || Hint.SERVER_ANOMALY)
                return Promise.reject()
            }
            this.setToken(token)
            await this.handleLoginAfter()
            return Promise.resolve()
        },

        // 获取用户信息
        async getUserinfo() {
            const { code,msg,result } = await UserApi.getUserinfo().catch(() => {
                this.initAuthStore()
                return Promise.reject()
            })
            if (code !== 200 || !result) {
                message.error(msg || Hint.SERVER_ANOMALY)
                this.initAuthStore()
                return Promise.reject()
            }
            this.roles = result.roles
            this.permissions = result.permissions
            this.userinfo = result.userinfo
        },

        // 获取用户路由
        async getUserRoutes() {
            const { code,msg,result } = await UserApi.getRoutes().catch(() => {
                this.initAuthStore()
                return Promise.reject()
            })
            if (code !== 200 || !result) {
                message.error(msg || Hint.SERVER_ANOMALY)
                this.initAuthStore()
                return Promise.reject()
            }
            this.routes = result
        },

        // 退出登录
        async signOut() {
            const data = await UserApi.signOut()
            this.removeToken()
            await router.push(RouterConfig.LOGIN_PATH)
            this.initAuthStore()
            return data
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
            await router.replace(redirect as string || RouterConfig.HOME_PATH)
            notification.success({
                message: '登录成功',
                description: `欢迎回来，${ this.userinfo?.username }！`
            })
        },

        // 初始化前端路由权限
        initFrontRouteAuth() {
            // 获取用户路由
            this.routes = RouterHelpers.getUserRouteList(this.roles)
            console.log(this.routes)
            // 自定义路由转Vue路由
            const vueRoutes = RouterHelpers.transformCustomRoutesToVueRoutes(this.routes)
            // 添加路由
            vueRoutes.forEach(route => router.addRoute(route))
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
        }
    }
})

export default useAuthStore
