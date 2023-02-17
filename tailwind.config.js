/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    // 关闭预设
    corePlugins: { preflight: false },
    theme: {
        extend: {
            colors: {
                // 主题色
                theme: {
                    // 常规
                    main: 'rgb(var(--primary-6))',
                    // 悬浮
                    hover: 'rgb(var(--primary-5))',
                    // click
                    click: 'rgb(var(--primary-7))',
                    // 特殊场景
                    other: 'rgb(var(--primary-4))',
                    // 一般禁用
                    disable: 'rgb(var(--primary-3))',
                    // 文字禁用
                    textDisable: 'rgb(var(--primary-2))',
                    // 浅色/白底悬浮
                    lightWhiteHover: 'rgb(var(--primary-1))'
                }
            },
            // 背景颜色
            backgroundColor: {
                // 常规
                base: 'var(--color-bg-1)',
                // 一级容器背景
                'container-1': 'var(--color-bg-2)',
                // 二级容器背景
                'container-2': 'var(--color-bg-3)',
                // 三级容器背景
                'container-3': 'var(--color-bg-4)',
                // 下拉弹出框、Tooltip 背景颜色
                float: 'var(--primary-7)',
                // 反色
                inverted: 'var(--color-bg-white)'
            },
            // 文本颜色
            textColor: {
                // 正文标题
                title: 'var(--color-text-1)',
                // 正文
                body: 'var(--color-text-2)',
                // 次要信息
                secondary: 'var(--color-text-3)',
                // 置灰信息
                ashing: 'var(--color-text-4)'
            },
            // 阴影
            boxShadowColor: {
                base: 'var(--shadow-color)'
            },
            // 边框颜色
            borderColor: {
                // 浅色
                shallow: 'var(--color-border-1)',
                // 一般
                general: 'var(--color-border-2)',
                // 深/悬浮
                deep: 'var(--color-border-3)',
                // 重/按钮描边
                weight: 'var(--color-border-4)'
            }
        }
    },
    plugins: []
}
