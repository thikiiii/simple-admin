export default class ServicesConfig {
    // token 过期时间 （4小时后过期）
    static readonly TOKEN_EXPIRATION_TIME = 1 / 24 * 4

    // 接口请求超时时间 （一分钟）
    static readonly REQUEST_TIMEOUT = 60 * 1000

    // 错误状态码
    static readonly ERROR_STATUS_CODE = new Map<number | string, string>([
        [ 400, '400: 请求出现语法错误 ~' ],
        [ 403, '403: 服务器拒绝访问 ~' ],
        [ 404, '404: 请求的资源不存在 ~' ],
        [ 405, '405: 请求方法未允许 ~' ],
        [ 408, '408: 网络请求超时 ~' ],
        [ 500, '500: 服务器内部错误 ~' ],
        [ 501, '501: 服务器未实现请求功能 ~' ],
        [ 502, '502: 错误网关 ~' ],
        [ 503, '503: 服务不可用 ~' ],
        [ 504, '504: 网关超时 ~' ],
        [ 505, '505: http版本不支持该请求 ~' ]
    ])

    // 退出登录错误状态码
    static readonly SIGN_OUT_STATUS_CODE = new Map<number | string, string>([
        [ 401, '401: 用户未授权 ~' ]
    ])

    // 响应拦截器错误
    static readonly INTERCEPTOR_ERROR_MESSAGE = new Map([
        [ 'theInterfaceReturnsAnException', '接口返回异常 ~' ],
        [ 'timeout', '网络请求超时 ~' ],
        [ 'Network Error', '接口连接异常 ~' ]
    ])

    // 关闭重复错误提示
    static readonly CLOSE_REPEAT_ERROR_MESSAGE = true
}
