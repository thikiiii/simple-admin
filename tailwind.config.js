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
            colors: { theme: 'var(--el-primary-color)' },
            backgroundColor: { base: 'var(--el-primary-color)' } ,
            textColor: {}
        } 
    },
    plugins: []
}
