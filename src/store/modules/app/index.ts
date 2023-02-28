import { defineStore } from 'pinia'
import initialApp from '@/store/modules/app/initial'

const useAppStore = defineStore('App', {
    state: (): AppStore => initialApp,
    getters: {
        // 动态侧边栏宽度
        dynamicSidebarWidth: state => state.sidebar.isCollapsed ? state.sidebar.collapsedSidebarWidth : state.sidebar.sidebarWidth,
        // 动态混合侧边栏宽度
        dynamicMixSidebarWidth: state => state.sidebar.isCollapsedMix ? state.sidebar.collapsedSidebarWidth : state.sidebar.mixSidebarWidth
    },
    actions: {
        // 初始化主题
        initTheme() {
            if (this.base.themeModeFollowSystem) {
                this.setThemeMode(this.getSystemThemeMode())
                this.onSystemThemeChange()
            } else {
                this.setThemeMode(this.base.themeMode)
                this.removeSystemThemeChange()
            }
        },

        // 获取系统主题
        getSystemThemeMode(): ThemeMode {
            const themeMedia = window.matchMedia('(prefers-color-scheme: light)')
            return themeMedia.matches ? 'Light' : 'Dark'
        },

        // 设置主题模式
        setThemeMode(mode: ThemeMode) {
            const body = document.body
            this.base.themeMode = mode
            switch (mode) {
                case 'Light':
                    body.removeAttribute('arco-theme')
                    break
                case 'Dark':
                    body.setAttribute('arco-theme', 'dark')
                    break
            }
        },

        systemThemeChange() {
            this.setThemeMode(this.getSystemThemeMode())
        },

        // 监听系统主题变化
        onSystemThemeChange() {
            const matchMedia = window.matchMedia('(prefers-color-scheme:dark)')
            // 监听主题变更
            matchMedia.addEventListener('change', this.systemThemeChange)
        },

        // 删除监听系统主题变化
        removeSystemThemeChange() {
            const matchMedia = window.matchMedia('(prefers-color-scheme:dark)')
            // 监听主题变更
            matchMedia.removeEventListener('change', this.systemThemeChange)
        },

        // 切换Sidebar折叠
        toggleSidebarCollapsed(isCollapsed?:boolean) {
            this.sidebar.isCollapsed = isCollapsed !== undefined ? isCollapsed : !this.sidebar.isCollapsed
        },

        // 切换移动端Sidebar可见
        toggleMobileSidebarVisible(isVisible?:boolean) {
            this.sidebar.mobileSidebarVisible = isVisible !== undefined ? isVisible : !this.sidebar.mobileSidebarVisible
        },

        // 切换混合Sidebar折叠
        toggleMixSidebarCollapsed(isCollapsed?:boolean) {
            this.sidebar.isCollapsedMix = isCollapsed !== undefined ? isCollapsed : !this.sidebar.isCollapsedMix
        },

        // 切换混合SidebarDrawer可见
        toggleMixSidebarDrawerVisible(isVisible?:boolean) {
            this.sidebar.mixSidebarDrawerVisible = isVisible !== undefined ? isVisible : !this.sidebar.mixSidebarDrawerVisible
        },

        // 切换混合SidebarDrawer可见
        toggleFixedMixSidebarDrawer(isFixedMix?:boolean) {
            this.sidebar.isFixedMixSidebarDrawer = isFixedMix !== undefined ? isFixedMix : !this.sidebar.isFixedMixSidebarDrawer
        }
    }
})

export default useAppStore
