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

    const echartsInstance = ref<EchartsInstance>()
    const echartsDom = ref<HTMLElement>()
    const eOption = isRef(option) ? option : ref(option)

    const dispose = () => {
        if (echartsInstance.value) {
            echartsInstance.value.dispose()
            echartsInstanceSet.delete(echartsInstance.value)
        }
    }

    const init = () => {
        if (echartsDom.value) {
            dispose()
            echartsInstance.value = echarts.init(echartsDom.value, base.themeMode, {
                renderer: renderMode
            })
        }
    }

    onMounted(() => {
        if (echartsDom.value) {
            init()
            echartsInstance.value?.setOption(eOption.value)
            echartsInstance.value && echartsInstanceSet.add(echartsInstance.value)
            resizeObserver.observe(echartsDom.value)
        }
    })

    onUnmounted(() => {
        echartsDom.value && resizeObserver.unobserve(echartsDom.value)
        dispose()
    })

    watch(eOption, () => {
        // echartsInstance.setOption(eOption.value)
    })

    watch(() => base.themeMode, () => init)

    return { echartsDom, echartsInstance: echartsInstance }
}


export default useEcharts
