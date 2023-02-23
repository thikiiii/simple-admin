declare interface AuthStore {
    token: Nullable<string>

    // 角色
    roles: import('@/enums/auth').RoleEnum[]

    // 细粒度权限
    permissions: import('@/enums/auth').PermissionEnum[]

    // 用户信息
    userinfo: Nullable<UserApiResponse.UserDetails['userinfo']>

    // 路由鉴权模式
    routeAuthMode: import('@/enums/auth').RouteAuthModeEnum

    // 是否初始化过权限路由
    hasInitAuthRoute: boolean

    // menu
    menus: []
}
