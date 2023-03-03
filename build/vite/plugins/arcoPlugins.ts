import { vitePluginForArco } from '@arco-plugins/vite-vue'

export const setupArcoPlugins = ()=>vitePluginForArco({
    theme: '@arco-themes/vue-thik-admin',
    style: 'css'
})

