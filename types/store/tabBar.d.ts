declare type TabBar = Pick<Route.RouteRecordRaw, 'path' | 'meta' | 'name'>

declare interface TabBarStore {
    // 标签栏
    tabBar: TabBar[]

    // 缓存菜单
    cacheMenus: string[]

    // 固定标签
    affixTabs: TabBar[]

    // 刷新
    mainVisible: boolean
}
