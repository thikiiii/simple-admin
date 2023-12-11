import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// 自动按需注册全局组件
export const setupAutoComponents = () => Components({
    // 为全局组件生成 TypeScript 声明
    // 并指定生成目录
    dts: 'types/components.d.ts',
    extensions: [ 'vue', 'md' ],
    // allow auto import and register components used in markdown
    include: [ /\.vue$/, /\.vue\?vue/, /\.md$/ ],
    resolvers: [
        AntDesignVueResolver({ importStyle: false }),
        // icon
        IconsResolver({
            // 不要前缀
            prefix: false
        })
    ]
})
