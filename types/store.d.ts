
declare namespace Store {
    // 鉴权 Store
    interface AuthStore {
        token: Nullable<string>

        // 角色
        roles: import('@/enums/auth').RoleEnum[]

        // 细粒度权限
        permissions: import('@/enums/auth').PermissionEnum[]

        // 用户信息
        userinfo: Nullable<UserService.Response.UserDetails['userinfo']>

        // 登录 loading
        loginLoading: boolean

        // 退出登录 loading
        signOutLoading: boolean
    }


    interface MenuOption {
        meta?: import('vue-router').RouteMeta
        children?: MenuOption[],
        key?: string | number;
        disabled?: boolean;
        icon?: () => import('vue').VNodeChild;
        extra?: string | (() => import('vue').VNodeChild);
        show?: boolean;
        titleExtra?: string | (() => import('vue').VNodeChild);
        title?: string | (() => import('vue').VNodeChild)
    }

    // 路由 Store
    interface RouteStore {
        // 菜单
        menus: MenuOption[]

        // 路由鉴权模式
        routeAuthMode: import('@/enums/auth').RouteAuthModeEnum

        // 是否初始化过权限路由
        hasInitAuthRoute: boolean
    }
}
