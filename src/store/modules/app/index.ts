import { defineStore } from 'pinia'
import initialApp from '@/store/modules/app/initial'

const useAppStore = defineStore('App', {
    state: (): AppStore => initialApp,
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
        }
    }
})

export default useAppStore
