import echarts from './core'

import { isRef, onMounted, onUnmounted, Ref, ref, watch } from 'vue'
import { EChartsOption } from 'echarts'
import useAppStore from '@/store/modules/app'
import { RendererType } from 'echarts/types/src/util/types'


type EchartsInstance = ReturnType<typeof echarts.init>

const echartsInstanceSet = new Set<EchartsInstance>()

// 用于监听 dom 大小变化
const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach(item => {
        const echartsInstance = [ ...echartsInstanceSet ].find(echartsInstance => echartsInstance.getDom() === item.target)
        if (echartsInstance) echartsInstance.resize()
    })
})

const useEcharts = (option: EChartsOption | Ref<EChartsOption>, renderMode?: RendererType) => {
    const appStore = useAppStore()
    const { base } = appStore

    let echartsInstance: EchartsInstance
    const echartsDom = ref<HTMLElement>()
    const eOption = isRef(option) ? option : ref(option)

    const init = () => {
        if (echartsDom.value) {
            echartsInstance.dispose()
            echarts.init(echartsDom.value, base.themeMode, {
                renderer: renderMode
            })
        }
    }

    onMounted(() => {
        if (echartsDom.value) {
            init()
            echartsInstance.setOption(eOption.value)
            echartsInstanceSet.add(echartsInstance)
            resizeObserver.observe(echartsDom.value)
        }
    })

    onUnmounted(() => {
        echartsDom.value && resizeObserver.unobserve(echartsDom.value)
        echartsInstanceSet.delete(echartsInstance)
        echartsInstance.dispose()
    })

    watch(eOption, () => {
        // echartsInstance.setOption(eOption.value)
    })

    watch(() => base.themeMode, () =>init)

    return { echartsDom }
}


export default useEcharts
