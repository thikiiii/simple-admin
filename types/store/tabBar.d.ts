type RouteLocationNormalizedLoaded = import('vue-router').RouteLocationNormalizedLoaded

declare interface Tab extends Pick<RouteLocationNormalizedLoaded, 'fullPath' | 'path' | 'name'> {
    meta: Route.Meta
}

declare interface TabBarStore {
    // 标签栏
    tabs: Tab[]

    // 缓存菜单
    cacheMenus: import('vue-router')['RouteRecordName']

    // 刷新
    mainVisible: boolean
}
