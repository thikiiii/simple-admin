import mockAxiosInstance from '@/services/request/serves/mock'

// 用户相关的Api
export abstract class UserApi {
    // 密码登录
    static passwordLogin = (data: UserApiRequest.PasswordLogin) => mockAxiosInstance.request<null, UserApiResponse.PasswordLogin>({
        method: 'POST',
        url: '/passwordLogin',
        data
    })

    // 获取用户信息
    static getUserinfo = () => mockAxiosInstance.request<UserApiResponse.UserDetails>({
        method: 'GET',
        url: '/getUserinfo'
    })

    // 获取用户路由
    static getRoutes = () => mockAxiosInstance.request<UserApiResponse.UserRoutes>({
        method: 'GET',
        url: '/getRoutes'
    })

    // 退出登录
    static signOut = () => mockAxiosInstance.request<MainService.Result>({
        method: 'GET',
        url: '/signOut'
    })
}
