import useAppStore from '@/store/modules/app'
import { watch } from 'vue'

// App订阅
const AppSubscribe = () => {
    const appStore = useAppStore()
    const { base } = appStore

    // 监听系统主题变化
    watch(() => base.themeModeFollowSystem, () => {
        if (base.themeModeFollowSystem) {
            appStore.systemThemeChange()
            appStore.onSystemThemeChange()
        } else {
            appStore.removeSystemThemeChange()
        }
    }, { immediate: true })
}

export default AppSubscribe
