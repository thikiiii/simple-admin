import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import { createGuard } from '@/router/guard'
import { RouterHelpers } from '@/router/helpers'
import routes from '@/router/routes/index'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: RouterHelpers.transformCustomRoutesToVueRoutes(routes)
})

export const setupRouter = async(app: App<Element>) => {
    app.use(router)
    createGuard(router)
    await router.isReady()
}

export default router
