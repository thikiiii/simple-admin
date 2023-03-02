import useAppStore from '@/store/modules/app'
import { watch } from 'vue'

// App订阅
const AppSubscribe = () => {
    const appStore = useAppStore()
    const { base } = appStore

    const setTheme = (mode:ThemeMode) => {
        const body = document.body
        switch (mode) {
            case 'Light':
                body.removeAttribute('arco-theme')
                break
            case 'Dark':
                body.setAttribute('arco-theme', 'dark')
                break
        }
    }

    // 监听主题模式
    watch(() => base.themeMode, () => setTheme(base.themeMode))

    // 监听系统主题变化
    watch(() => base.themeModeFollowSystem, () => {
        if (base.themeModeFollowSystem) {
            appStore.systemThemeChange()
            appStore.onSystemThemeChange()
        } else {
            setTheme(base.themeMode)
            appStore.removeSystemThemeChange()
        }
    },{ immediate: true })
}

export default AppSubscribe
