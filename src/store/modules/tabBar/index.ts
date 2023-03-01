import { defineStore } from 'pinia'
import router from '@/router'
import { nextTick } from 'vue'
import { Settings } from '@/settings'

const useTabBarStore = defineStore('TabBar',{
    state: ():TabBarStore=>({
        // 标签栏
        tabs: [],
        // 缓存菜单
        cacheMenus: [],
        // 固定标签
        affixTabs: [],
        // 刷新
        mainVisible: false
    }),
    actions: {
        // 是否激活
        isActive(path: string) {
            return router.currentRoute.value.path === path
        },

        // 是否存在
        isExist(path: string) {
            return this.tabs.some(item => item.path === path)
        },

        // 获取 index
        getIndex(path: string) {
            return this.tabs.findIndex(item => item.path === path)
        },

        // 添加 tabBar
        addTab(tab: Route.RouteRecordRaw) {
            // 不存在就 push
            !this.isExist(tab.path) && this.tabs.push(tab)
            // name 为真，且 name 不存在就push
            tab.name && !this.cacheMenus.some(name => name === tab.name) && this.cacheMenus.push(tab.name)
        },

        // 关闭
        closeTab(tab: Route.RouteRecordRaw) {
            const index = this.getIndex(tab.path)
            this.tabs.splice(index, 1)
            // 激活状态 跳转到上一个标签
            this.isActive(tab.path) && router.push(this.tabs[index - 1].path)
            if (!tab.meta?.keepAlive) return
            this.cacheMenus.splice(
                this.cacheMenus.findIndex(name => name === tab.name),
                1
            )
        },

        // 刷新当前激活的路由
        refreshCurrent() {
            this.mainVisible = false
            void nextTick(() => {
                this.mainVisible = true
            })
        },

        // 关闭左侧
        closeLeft(path: string) {
            const index = this.getIndex(path)
            if (index === 0 || index === -1) return
            const tabs = this.tabs.slice(index)
            this.tabs = [ ...this.affixTabs, ...tabs ]
            this.setCacheMenus()
            this.routeNotMatchedRedirectHome()
        },

        // 关闭右侧
        closeRight(path: string) {
            const index = this.getIndex(path)
            if (index === this.tabs.length - 1 || index === -1) return
            const tabs = this.tabs.slice(0, index + 1)
            this.tabs = [ ...this.affixTabs, ...tabs.filter(item => !item.meta?.affix) ]
            this.setCacheMenus()
            this.routeNotMatchedRedirectHome()
        },

        // 关闭其他
        closeOther(path: string) {
            const i = this.getIndex(path)
            if (i === -1) return
            const tabs = [ ...this.affixTabs ]
            const tab = this.tabs[i]
            if (!tab.meta?.affix) tabs.push(tab)
            this.tabs = tabs
            this.setCacheMenus()
            this.routeNotMatchedRedirectHome()
        },

        // 关闭全部
        closeAll() {
            this.tabs = [ ...this.affixTabs ]
            this.setCacheMenus()
            // 重定向到首页
            router.push(Settings.homePath)
        },

        // 获取固定标签
        getAffixTabs(authRoutes: Route.RouteRecordRaw[]): Route.RouteRecordRaw[] {
            const tabs: Route.RouteRecordRaw[] = []
            const filter = (authRoutes: Route.RouteRecordRaw[]) => {
                authRoutes.forEach(route => {
                    if (route.meta?.affix) tabs.push(route)
                    if (route.children) filter(route.children)
                })
            }
            filter(authRoutes)
            return tabs
        },

        // 设置缓存菜单
        setCacheMenus() {
            this.cacheMenus = this.tabs.reduce<string[]>(
                (cacheMenus, item) => {
                    item.meta?.keepAlive && cacheMenus.push(item.name as string)
                    return cacheMenus
                },
                []
            )
        },

        // 匹配不到当前路由重定向到首页
        routeNotMatchedRedirectHome() {
            if (!this.isExist(router.currentRoute.value.path)) router.push(Settings.homePath)
        },

        initTabBar(authRoutes:Route.RouteRecordRaw[]) {
            const affixTabs = this.getAffixTabs(authRoutes)
            this.tabs = [ ...affixTabs ]
            this.affixTabs = [ ...affixTabs ]
            this.setCacheMenus()
        }
    }
})

export default useTabBarStore
