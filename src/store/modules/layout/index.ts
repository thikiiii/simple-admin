import { defineStore } from 'pinia'
import initialSettings from '@/store/modules/layout/initial'

const useLayoutStore = defineStore('Settings', {
    state: (): SettingsStore => initialSettings,
    actions: {
        // 切换主题
        toggleDark() {
            const body = document.body
            if (body.getAttribute('arco-theme') === 'dark') {
                this.app.isDark = false
                body.removeAttribute('arco-theme')
            } else {
                // 设置为暗黑主题
                this.app.isDark = true
                body.setAttribute('arco-theme', 'dark')
            }
        }
    }
})

export default useLayoutStore
