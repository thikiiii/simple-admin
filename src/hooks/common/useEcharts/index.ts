import echarts from './core'

import { onMounted, onUnmounted, Ref } from 'vue'
import { EChartsType } from 'echarts'


const eCharts = new Set<EChartsType>()
// 用于监听 dom 大小变化
const resizeObserver = new ResizeObserver((entries, observer) => {
    // eCharts.
})

const useEcharts = (elRef: Ref<HTMLElement>) => {
    onMounted(() => {
        const echartsInstance = echarts.init(elRef.value)
        resizeObserver.observe(elRef.value)
    })

    onUnmounted(() => {
        resizeObserver.unobserve(elRef.value)
    })
}


export default useEcharts
