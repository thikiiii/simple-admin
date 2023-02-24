import { Settings } from '@/settings'

// Layout 根路由
export const ROUTE_ROOT: Route.RouteRecordRaw = {
    path: '/',
    name: 'root',
    component: 'Directory',
    redirect: Settings.homePath
}

// 登录路由路径
export const ROUTE_LOGIN_PATH = '/login'

// 登录页
export const ROUTE_LOGIN: Route.RouteRecordRaw = {
    path: ROUTE_LOGIN_PATH,
    name: 'login',
    component: 'Single',
    meta: { title: '登录' }
}

// 404页面
export const ROUTE_404: Route.RouteRecordRaw = {
    path: '/:NotFound(.*)*',
    name: 'notFound',
    component: 'Single',
    meta: { title: '404' }
}

// 403 无权限


export default [ ROUTE_ROOT,ROUTE_LOGIN,ROUTE_404 ]
