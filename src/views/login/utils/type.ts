// 登录页面行为
export enum LoginAction {
    // 密码登录
    PasswordLogin = 'PasswordLogin',
    // 手机号登录
    PhoneLogin = 'PhoneLogin',
    // 二维码登录
    QrCodeLogin = 'QrCodeLogin',
    // 注册账号
    Register = 'Register',
}

// 登录页面上下文类型
export interface LoginContext {
    // 当前登录类型,
    currentLoginAction: LoginAction
}
