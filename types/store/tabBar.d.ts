declare interface TabBarStore {
    // 标签栏
    tabs: Route.RouteRecordRaw[]

    // 缓存菜单
    cacheMenus: string[]

    // 固定标签
    affixTabs: Route.RouteRecordRaw[]

    // 刷新
    mainVisible: boolean
}
