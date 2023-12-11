import store from 'store2'

// 系统
export class AppStorage {
    // app
    public static readonly APP_CONFIG_KEY = 'TOY_APP'

    // 设置 app
    static setAppConfig = (setting: AppStore) => store.set(this.APP_CONFIG_KEY, setting)

    // 获取 app
    static getAppConfig = (): AppStore | undefined => store.get(this.APP_CONFIG_KEY)

    // 删除 app
    static removeAppConfig = () => store.remove(this.APP_CONFIG_KEY)
}
