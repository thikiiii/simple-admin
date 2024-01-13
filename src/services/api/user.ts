import { mockRequest } from '@/services/request/serves/mock'

// 用户相关的Api
export abstract class UserApi {
    // 密码登录
    static passwordLogin = (data: UserModel.PasswordLoginParams) => mockRequest<null,UserModel.PasswordLoginModel>({
        method: 'POST',
        url: '/passwordLogin',
        data
    })

    // 获取用户信息
    static getUserinfo = () => mockRequest<UserModel.UserDetailsModel>({
        method: 'GET',
        url: '/getUserinfo'
    })

    // 获取用户路由
    static getRoutes = () => mockRequest<UserModel.UserRoutesModel>({
        method: 'GET',
        url: '/getRoutes'
    })

    // 退出登录
    static signOut = () => mockRequest({
        method: 'GET',
        url: '/signOut'
    })
}
