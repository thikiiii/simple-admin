import store from 'store2'
// 系统
export class AppStorage {
    // app
    public static readonly settings = 'TOY_APP'

    // 设置 app
    static setAppConfig = (setting: AppStore) => store.set(this.settings, setting)

    // 获取 app
    static getAppConfig = (): AppStore | undefined => store.get(this.settings)

    // 删除 app
    static removeAppConfig = () => store.remove(this.settings)
}
