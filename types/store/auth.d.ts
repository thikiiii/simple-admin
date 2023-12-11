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

    // 是否已生成路由
    isGeneratedRoutes: boolean

    // 用户的路由
    routes: Route.RouteRecordRaw[]
}
