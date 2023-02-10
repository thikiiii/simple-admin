import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.less'
import 'ant-design-vue/dist/antd.variable.min.css'
import '@/assets/styles/index.css'
import AppLoading from '@/components/system/AppLoading.vue'
const bootStart = async() => {
    // app loading
    const appLoading = createApp(AppLoading)
    appLoading.mount('#appLoading')

    const app = createApp(App)

    setTimeout(() => {
        app.mount('#app')
    },3000)
}


void bootStart()
