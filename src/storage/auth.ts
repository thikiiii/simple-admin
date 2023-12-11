import Cookies from 'js-cookie'
import ServicesConfig from '@/config/services'

export class AuthCookie {
    static readonly TOKEN_KEY = 'Simple_TOKEN'

    // 设置 token
    static setToken = (token: string) => Cookies.set(this.TOKEN_KEY, token, { expires: ServicesConfig.TOKEN_EXPIRATION_TIME })

    // 获取 token
    static getToken = ():Nullable<string> => Cookies.get(this.TOKEN_KEY) || null

    // 删除 token
    static removeToken = () => Cookies.remove(this.TOKEN_KEY)
}
