import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import AutoImport from 'unplugin-auto-import/vite'

export const unPlugin = () => {
    // 本地图标集合 key
    const LOCAL_ICON_COLLECTION_KEY = 'local'
    const iconResolver = IconsResolver({
        // 别名
        alias: {
            antd: 'ant-design'
        },
        // 前缀
        prefix: 'i',
        customCollections: [ LOCAL_ICON_COLLECTION_KEY ]
    })
    return [
        // Api自动导入
        AutoImport({
            dts: 'types/auto-import.d.ts',
            resolvers: [
                iconResolver
            ]
        }),
        // 组件自动导入
        Components({
            // 为全局组件生成 TypeScript 声明
            // 并指定生成目录
            dts: 'types/components.d.ts',
            extensions: [ 'vue','md' ],
            // allow auto import and register components used in markdown
            include: [ /\.vue$/,/\.vue\?vue/,/\.md$/ ],
            resolvers: [
                AntDesignVueResolver({ importStyle: false }),
                // 自动导入图标
                iconResolver
            ]
        }),
        // 图标
        Icons({
            jsx: 'react',
            compiler: 'vue3',
            // 自动安装
            autoInstall: true,
            // 自定义集合
            customCollections: {
                // 本地svg, ./src/assets/svgs 目录下的所有Svg
                [LOCAL_ICON_COLLECTION_KEY]: FileSystemIconLoader('./src/assets/svgs')
            }
        })
    ]
}
