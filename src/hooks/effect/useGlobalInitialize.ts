// 全局初始化
import { initializeThemeCSSVariable } from '@/store/modules/app/theme'
import { theme } from 'ant-design-vue'

export const useGlobalInitialize = () => {
    void initializeThemeCSSVariable(theme.useToken().token)
}
