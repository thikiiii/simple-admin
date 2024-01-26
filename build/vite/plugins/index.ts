// 导出vite插件
import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { setupMock } from './plugins/mock'
import { setupHtml } from './plugins/html'
import { setupCompress } from './plugins/compress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { VitePWA } from 'vite-plugin-pwa'
import { setupUnplugin } from './plugins/unplugin'
import { setupLocalSvg } from './plugins/localSvg'

export const createVitePlugins = (viteEnv: ImportMetaEnv,isBuild: boolean): PluginOption[] => {
    const { VITE_USE_MOCK,VITE_LEGACY,VITE_USE_PWA } = viteEnv
    const plugins: PluginOption[] = [
        vue(),
        // Jsx 语法
        vueJsx(),
        // 配置 ejs
        setupHtml(viteEnv,isBuild),
        // 配置 本地svg
        setupLocalSvg(viteEnv),
        // 配置icon
        ...setupUnplugin()
    ]
    // mock
    VITE_USE_MOCK && plugins.push(setupMock(isBuild))

    if (isBuild) {
        // 兼容一些旧版浏览器
        VITE_LEGACY && plugins.push(legacy({ targets: [ 'defaults','not IE 11' ] }))
        // PWA
        VITE_USE_PWA && plugins.push(VitePWA({}))
        plugins.push(...[ setupCompress(viteEnv) ])
    }
    return plugins
}
