import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    transformers: [
        // 指令
        transformerDirectives()
    ],
    // 自定义捷径
    shortcuts: {
        // 填充并取消滚动条
        'full-hidden': 'w-full h-full overflow-hidden',
        // 弹性布局居中
        'flex-center': 'flex justify-center items-center',
        // 弹性布局垂直居中
        'flex-items-center': 'flex items-center',
        // 弹性布局水平居中
        'flex-justify-center': 'flex justify-center',
        // 弹性布局两端对齐
        'flex-justify-between': 'flex justify-between'
    },
    // 自定义主题
    theme: {
        colors: {
            // 主色
            'primary': 'var(--colorPrimary)',
            // 浅主色
            'primary-shallow': 'var(--colorPrimaryBg)',
            // 一级填充色
            'fill': 'var(--colorFill)',
            // 二级填充色
            'fill-secondary': 'var(--colorFillSecondary)',
            // 三级填充色
            'fill-tertiary': 'var(--colorFillTertiary)',
            // 四级填充色
            'fill-quaternary': 'var(--colorFillQuaternary)',
            'bg-container': 'red'
        },
        textColor: {
            // 一级文本色
            'base': 'var(--colorText)',
            // 二级级文本色
            'secondary': 'var(--colorTextSecondary)',
            // 三级文本色
            'tertiary': 'var(--colorTextTertiary)',
            // 四级文本色
            'quaternary': 'var(--colorTextQuaternary)'
        },
        // backgroundColor: {
        //     // 组件容器背景色
        //     'container': 'var(--colorBgContainer)',
        //     // 浮层容器背景色
        //     'container-elevated': 'var(--colorBgElevated)',
        //     // 布局背景色
        //     'layout': 'var(--colorBgLayout)',
        //     // 引起注意的背景色
        //     'spotlight': 'var(--colorBgSpotlight)',
        //     // 浮层的背景蒙层颜色
        //     'mask': 'var(--colorBgMask)'
        // },
        boxShadow: {
            // 一级阴影
            'base': 'var(--boxShadow)',
            // 二级阴影
            'secondary': 'var(--boxShadowSecondary)'
        }
    }
})
