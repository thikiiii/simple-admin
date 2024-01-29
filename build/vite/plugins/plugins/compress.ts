import compress from 'vite-plugin-compression'

// 压缩
export const compressPlugin = (viteEnv: ImportMetaEnv) => {
    const { VITE_BUILD_COMPRESS } = viteEnv
    if (VITE_BUILD_COMPRESS === 'none') return
    return compress({
        algorithm: VITE_BUILD_COMPRESS
    })
}
