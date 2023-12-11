import useAuthStore from '@/store/modules/auth'
import { AuthCookie } from '@/storage/auth'
import { RouteAuthModeEnum } from '@/enums/auth'
import { runTacticsAction } from '@/utils'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { message } from 'ant-design-vue'
import RouterConfig from '@/config/router'
import { RouterHelpers } from '@/router/helpers'

// 守卫策略
const guardTactics = (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
) => {
    const {
        isLogin,
        isAuth,
        getUserinfo,
        routeAuthMode,
        initFrontRouteAuth,
        initServerRouteAuth,
        initAuthStore,
        isGeneratedRoutes
    } = useAuthStore()
    // 处理路由鉴权模式
    const handleRouteAuthMode = async () => {
        switch (routeAuthMode) {
                // 前端路由鉴权模式
            case RouteAuthModeEnum.FRONT:
                // 初始化路由
                initFrontRouteAuth()
                break
                // 服务端路由鉴权模式
            case RouteAuthModeEnum.SERVER:
                await initServerRouteAuth()
                break
        }
    }

    // 忽略鉴权直接放行
    if (to.meta?.ignoreAuth) return next()

    // 策略守卫
    const guardTacticsAction: TacticsAction[] = [
        // 未登录
        [
            !isLogin,
            () => {
                console.info('---未登录，强制跳转到登录页---')
                to.path === RouterConfig.LOGIN_PATH ? next() : next(RouterConfig.LOGIN_PATH)
            }
        ],
        // 登录的情况下在 cookie 中获取不到 token
        [
            !AuthCookie.getToken(),
            () => {
                console.info('---令牌已失效，请重新登录---')
                message.warning('令牌已失效，请重新登录！')
                initAuthStore()
                next(RouterConfig.LOGIN_PATH)
            }
        ],
        // 没有鉴权（没有用户信息和角色）
        [
            !isAuth,
            async () => {
                console.info('---没有鉴权（没有用户信息和角色）---')
                // 获取用户信息
                await getUserinfo().catch(() => {
                    next(RouterConfig.LOGIN_PATH)
                    return Promise.reject()
                })
                await handleRouteAuthMode()
                next({ path: to.path, query: to.query })
            }
        ],
        // 没有生成路由
        [
            !isGeneratedRoutes,
            async () => {
                console.info('---没有生成路由---')
                await handleRouteAuthMode()
                next({ ...to, replace: true })
            }
        ],
        // 登录情况下不能到登录页面
        [
            to.path === RouterConfig.LOGIN_PATH,
            () => {
                console.info('---登录情况下不能到登录页面---')
                next(from.fullPath)
            }
        ],
        //  判断是否是外链
        [
            RouterHelpers.isExternalLink(to.path),
            () => {
                console.info('---打开外链---')
                RouterHelpers.openTheLink(to.path)
                next(from.fullPath)
            }
        ],
        // 走到这步直接通过（走到这步就表示已经登录、有权限、有路由了）
        [
            true,
            () => {
                // 禁用菜单
                if (to.meta.disabledMenu) {
                    message.warning('该菜单已被禁用访问！请联系管理员！')
                    return next(from.fullPath)
                }
                console.info('---已经登录、有权限、有路由了---')
                next()
            }
        ]
    ]
    runTacticsAction(guardTacticsAction)
}

export default guardTactics
