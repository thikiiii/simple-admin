import { createRouter,createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import { createGuard } from '@/router/uitls/guard'
import { RouterTool } from '@/router/uitls/tool'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: RouterTool.transformCustomRoutesToVueRoutes(RouterTool.getStaticRoutes())
})

export const setupRouter = async (app: App<Element>) => {
    app.use(router)
    createGuard(router)
    await router.isReady()
}

export default router
