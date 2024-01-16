import { RouteAuthModeEnum } from '@/enums/auth'

// 路由配置
export default class RouterConfig {
    // 登录路径
    static LOGIN_PATH = '/login'

    // 首页路径
    static HOME_PATH = '/dashboard'

    // 基础布局菜单容器的路由后缀
    static BASIC_SELF_CONTAINER_ROUTE_PATH_SUFFIX = '-container'

    // 路由鉴权模式
    static ROUTE_AUTH_MODE = RouteAuthModeEnum.FRONT
}
