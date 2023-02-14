import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss'

import AppLoading from '@/components/system/AppLoading.vue'

const bootStart = async() => {
    // app loading
    const appLoading = createApp(AppLoading)
    appLoading.mount('#appLoading')

    const app = createApp(App)

    app.mount('#app')
}


void bootStart()
