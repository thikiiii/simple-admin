import { defineStore } from 'pinia'
import { UserApi } from '@/services/api/user'
import { AuthCookie } from '@/storage/auth'
import { Message, Notification } from '@arco-design/web-vue'
import router from '@/router'
import { Settings } from '@/settings'
import { RouteAuthModeEnum } from '@/enums/auth'
import { RouterHelpers } from '@/router/helpers'

const useAuthStore = defineStore('Auth', {
    state: (): AuthStore => ({
        token: null,
        // 角色
        roles: [],
        // 细粒度权限
        permissions: [],
        // 用户信息
        userinfo: null,
        routeAuthMode: Settings.routeAuthMode,
        hasInitAuthRoute: false,
        menus: []
    }),
    actions: {
        // 初始化
        initAuthStore() {
            this.removeToken()
            this.$reset()
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

        // 处理登录后
        async handleLoginAfter() {
            await this.getUserinfo()

            switch (this.routeAuthMode) {
                case RouteAuthModeEnum.FRONT:
                    this.handleRouteAuthFrontMode()
                    break
                case RouteAuthModeEnum.SERVER:
                    break
            }

            const redirect = router.currentRoute.value.query.redirect
            // await router.replace(redirect as string || Settings.homePath)
            // Notification.success({
            //     title: '登录成功',
            //     content: `欢迎回来，${ this.userinfo?.username }！`
            // })
        },

        // 处理前端路由模式
        handleRouteAuthFrontMode() {
            // 自定义路由
            const userCustomizeRoutes = RouterHelpers.getUserRouteList(this.roles)
            // 自定义路由转Vue路由
            const vueRoutes = RouterHelpers.transformCustomRoutesToVueRoutes(userCustomizeRoutes)
            console.log(vueRoutes)
            // 添加路由
            // vueRoutes.forEach(route=>router.addRoute(route))
            console.log()
        }
    }
})

export default useAuthStore
