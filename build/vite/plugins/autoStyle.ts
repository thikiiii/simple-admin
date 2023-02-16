import { createStyleImportPlugin } from 'vite-plugin-style-import'

export const setupAutoStyle = () => createStyleImportPlugin({
    libs: [
        {
            libraryName: '@arco-design/web-vue',
            esModule: true,
            resolveStyle: (name) => {
                // less
                return `@arco-design/web-vue/es/${name}/style/index.js`
            }
        }
    ]
})
