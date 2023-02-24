import { useEventListener } from '@vueuse/core'
import { AppStorage } from '@/storage/app'
import useAppStore from '@/store/modules/app'

// 全局事件
export const useGlobalEvents = () => {
    const appStore = useAppStore()

    // 监听窗口关闭
    useEventListener(window, 'unload', () => {
        // 储存 AppConfig
        AppStorage.setAppConfig(appStore.$state)
    })

    // 监听窗口大小变化
    useEventListener(window, 'resize', () => {
        // 判断是否是移动端
        appStore.base.isMobile = document.body.offsetWidth <= appStore.base.mobileTriggerWidth
    })
}
