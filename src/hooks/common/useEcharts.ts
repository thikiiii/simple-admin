import * as echarts from 'echarts/core'
import {
    BarChart,
    BarSeriesOption,
    LineChart,
    LineSeriesOption
} from 'echarts/charts'
import {
    TitleComponent,
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    GridComponent,
    GridComponentOption,
    DatasetComponent,
    DatasetComponentOption,
    TransformComponent
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

export type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
])


import { Ref } from 'vue'

const useEcharts = (elRef:Ref<HTMLElement>) => {

}


export default useEcharts
