import { onMounted } from 'vue'
import useAppStore from '@/store/modules/app'

// 全局初始化
export const useGlobalInitialize = () => {
    const settingStore = useAppStore()
    onMounted(() => {
        // dom加载完成后 初始化主题
        settingStore.initTheme()
    })
}
