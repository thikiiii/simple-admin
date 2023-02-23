// 需要权限的路由模块列表
import { RouteRecordRaw } from 'vue-router'
import { Sort } from '@/enums/common'
import { matchUrl } from '@/utils/regularCheck'
import { RoleEnum } from '@/enums/auth'
import component from '*.vue'


export class RouterHelpers {
    // 前端路由模块列表
    static readonly ROUTER_MODULES_LIST = import.meta.glob('../modules/**.ts', { eager: true })

    // 页面组件
    static readonly VIEW_COMPONENTS = import.meta.glob('@/views/**/**.vue')

    // 前端路由列表
    static routeList = Object.keys(this.ROUTER_MODULES_LIST).reduce<Route.RouteRecordRaw[]>((routerModules, routerKey) => {
        const router = (this.ROUTER_MODULES_LIST[routerKey] as any).default
        if (!(router instanceof Object)) return routerModules
        routerModules.push(router)
        return routerModules
    }, [])

    // 获取用户路由
    static getUserRouteList(roles: RoleEnum[]) {
        // 不需要授权
        const noNeedAuth = (route: Route.RouteRecordRaw) => !route.meta?.roles?.length

        // 已授权
        const hasAuth = (route: Route.RouteRecordRaw) => route.meta?.roles?.some(role => roles.includes(role))

        const getFrontRoute = (routeList: Route.RouteRecordRaw[]) => routeList.reduce<Route.RouteRecordRaw[]>((userRoute, route) => {
            // PUSH 权限路由
            const pushAuthRoute = () => {
                const cRoute = { ...route }
                userRoute.push(cRoute)
                if (cRoute.children?.length) cRoute.children = getFrontRoute(cRoute.children)
                return userRoute
            }
            if (noNeedAuth(route) || hasAuth(route)) return pushAuthRoute()
            return userRoute
        }, [])
        return getFrontRoute(this.routeList)
    }

    // 获取页面组件
    static getViewComponent(route: Route.RouteRecordRaw) {
        // 组件路径
        const componentPath = this.transformRoutePathToComponentPath(route.path)
        console.log(componentPath)
        const viewComponent = Object.keys(this.VIEW_COMPONENTS).find(path => path === componentPath)
        if (!viewComponent) console.warn('没有找到组件：', componentPath)
        return this.VIEW_COMPONENTS[viewComponent as string]
    }

    // 自定义路由转 vue 路由
    static transformCustomRouteToVueRoute(route: Route.RouteRecordRaw) {
        // 如果是外链就不转vue路由
        if (this.isExternalLink(route.path)) return undefined

        let vueRoute = { ...route, component: undefined } as RouteRecordRaw
        vueRoute.name = route.path

        switch (route.component) {
            // 单页面 （类似登录页）
            case 'Single':
                vueRoute.component = this.getViewComponent(route)
                break
            // 没有目录的菜单
            case 'Self':
                console.log(route)
                // 一级路由转二级路由
                vueRoute = {
                    path: '/',
                    name: route.name,
                    component: () => import('@/layout/index.vue'),
                    children: [
                        {
                            ...route,
                            component: this.getViewComponent(route)
                        } as RouteRecordRaw
                    ]
                }
                break
            // 目录
            case 'Directory':
                vueRoute.component = () => import('@/layout/index.vue')
                break
            // 菜单页面
            case 'Child':
                vueRoute.component = this.getViewComponent(route)
                break
        }
        return vueRoute
    }

    // 批量自定义路由转 vue 路由
    static transformCustomRoutesToVueRoutes(routes: Route.RouteRecordRaw[]) {
        return routes.reduce<RouteRecordRaw[]>((vueRoutes, route) => {
            const vueRoute = this.transformCustomRouteToVueRoute(route)
            if (route.children?.length && vueRoute) vueRoute.children = this.transformCustomRoutesToVueRoutes(route.children)
            vueRoute && vueRoutes.push(vueRoute)
            return vueRoutes
        }, [])
    }

    // 路由路径 转 组件路径
    static transformRoutePathToComponentPath(name: string) {
        return `/src/views/${ name.startsWith('/') ? name.replace(/^\//, '') : name }/index.vue`
    }

    // 排序路由, 默认升序
    static sortRoutes(routes: Route.RouteRecordRaw[], type: Sort) {
        routes.sort((a, b) => {
            if (type === Sort.Ascending) return Number(a.meta?.orderNo) - Number(b.meta?.orderNo)
            if (type === Sort.Descending) return Number(b.meta?.orderNo) - Number(a.meta?.orderNo)
            return 0
        })
    }

    // 是否外链
    static isExternalLink(url) {
        return matchUrl.test(url)
    }

    // 打开外链
    static openTheLink(url: string) {
        const open = window.open('_blank')
        if (open) open.location = url
    }
}
