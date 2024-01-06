import { App } from 'vue'

// 安装全局组件
const setupComponents = (app: App<Element>) => {
    const components = [ ]
    components.forEach(component => app.use(component))
}
export default setupComponents
