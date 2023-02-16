import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/index'
import AppLoading from '@/components/system/AppLoading.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'

const bootStart = async() => {
    // app loading
    const appLoading = createApp(AppLoading)
    appLoading.mount('#appLoading')

    const app = createApp(App)

    // 挂载状态管理
    setupStore(app)

    await setupRouter(app)
    
    app.mount('#app')
}


void bootStart()
