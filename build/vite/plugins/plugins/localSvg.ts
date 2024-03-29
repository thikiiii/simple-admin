import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// 本地svg
export const localSvgPlugin = (viteEnv: ImportMetaEnv) => createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [ path.resolve(process.cwd(), 'src/assets/svgs') ],
    // 指定symbolId格式
    symbolId: `${ viteEnv.VITE_ICON_LOCAL_PREFIX }-[dir]-[name]`,
    // 插入位置
    inject: 'body-last',
    customDomId: 'LOCAL_ICON'
})
