import { defineStore } from 'pinia'
import router from '@/router'
import { nextTick } from 'vue'
import RouterConfig from '@/config/router'

const useTabBarStore = defineStore('TabBar', {
    state: (): TabBarStore => ({
        // 标签栏
        tabs: [],
        // 缓存菜单
        cacheMenus: [],
        // 刷新
        mainVisible: true
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
        addTab(tab: Tab) {
            // 存在就替换，不存在就push
            this.isExist(tab.path) ?
                this.tabs.splice(this.getIndex(tab.path), 1, tab) :
                this.tabs.push(tab)
            // name 为真，且 name 不存在就push
            tab.name && !this.cacheMenus.some(name => name === tab.name) && this.cacheMenus.push(tab.name)
        },

        // 关闭
        closeTab(tab: Tab) {
            const index = this.getIndex(tab.path)
            this.tabs.splice(index, 1)
            // 激活状态 跳转到上一个标签
            if (this.isActive(tab.path)) {
                // 没有标签的时候跳转到首页
                if (index <= 0) {
                    router.push(RouterConfig.HOME_PATH)
                } else {
                    const tab = this.tabs
                        .slice(0, index)
                        .reverse()
                        .find(item => !item.meta?.disabledMenu)
                    tab ? router.push(tab.path) : router.push(RouterConfig.HOME_PATH)
                }
            }
            if (!tab.meta?.keepAlive) return
            this.cacheMenus.splice(this.cacheMenus.findIndex(name => name === tab.name), 1)
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
            this.tabs = [ ...this.getAffixTabs(index, 'left'), ...tabs ]
            this.setCacheMenus()
        },

        // 关闭右侧
        closeRight(path: string) {
            const index = this.getIndex(path)
            if (index === this.tabs.length - 1 || index === -1) return
            const tabs = this.tabs.slice(0, index + 1)
            this.tabs = [ ...tabs, ...this.getAffixTabs(index, 'right') ]
            this.setCacheMenus()
        },

        // 关闭其他
        closeOther(path: string) {
            const i = this.getIndex(path)
            if (i === -1) return
            const tabs = [ ...this.getAffixTabs() ]
            const tab = this.tabs[i]
            if (!tab.meta?.affix) tabs.push(tab)
            this.tabs = tabs
            this.setCacheMenus()
        },

        // 关闭全部
        closeAll() {
            this.tabs = [ ...this.getAffixTabs() ]
            this.setCacheMenus()
            // 重定向到首页
            router.push(RouterConfig.HOME_PATH)
        },

        // 获取固定标签
        getAffixTabs(index?: number, direction?: 'left' | 'right'): Tab[] {
            return this.tabs.filter((item, i) => {
                let boundary = true
                if (index !== undefined && direction) {
                    boundary = direction === 'left' ? i < index : i > index
                }
                return item.meta?.affix && boundary
            })
        },

        // 设置缓存菜单
        setCacheMenus() {
            this.cacheMenus = this.tabs.reduce<string[]>((cacheMenus, item) => {
                item.meta?.keepAlive && cacheMenus.push(item.name as string)
                return cacheMenus
            }, [])
        }
    }
})

export default useTabBarStore
