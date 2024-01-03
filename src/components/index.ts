import { App } from 'vue'
import STable from '@surely-vue/table'

// 安装全局组件
const setupComponents = (app: App<Element>) => {
    const components = [ STable ]
    components.forEach(component => app.use(component))
}
export default setupComponents
