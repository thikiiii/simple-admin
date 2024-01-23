import useAppStore from '@/store/modules/app'

// 全局初始化
export const useGlobalInitialize = () => {
    const appStore = useAppStore()
    const { base } = appStore
    // 判断是否移动端
    base.isMobile = document.body.offsetWidth <= base.mobileTriggerWidth
}
