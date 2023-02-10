declare interface AuthStore {
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
