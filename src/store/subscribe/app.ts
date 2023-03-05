import useAppStore from '@/store/modules/app'
import { watch } from 'vue'

// App订阅
const AppSubscribe = () => {
    const appStore = useAppStore()
    const { base } = appStore

    const setTheme = (mode:ThemeMode) => {
        const body = document.body
        switch (mode) {
            case 'light':
                body.removeAttribute('arco-theme')
                break
            case 'dark':
                body.setAttribute('arco-theme', 'dark')
                break
        }
    }

    // 监听主题模式
    watch(() => base.themeMode, () => {
        console.log(222)
        setTheme(base.themeMode)
    })

    // 监听系统主题变化
    watch(() => base.themeModeFollowSystem, () => {
        console.log(11)
        if (base.themeModeFollowSystem) {
            appStore.systemThemeChange()
            appStore.onSystemThemeChange()
            setTheme(appStore.base.themeMode)
        } else {
            setTheme(base.themeMode)
            appStore.removeSystemThemeChange()
        }
    },{ immediate: true })
}

export default AppSubscribe
