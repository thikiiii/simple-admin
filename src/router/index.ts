import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import { createGuard } from '@/router/guard'
import { RouterHelpers } from '@/router/helpers'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: RouterHelpers.transformCustomRoutesToVueRoutes(RouterHelpers.getStaticRoutes())
})

export const setupRouter = async (app: App<Element>) => {
    app.use(router)
    createGuard(router)
    await router.isReady()
}

export default router
