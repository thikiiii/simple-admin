// 登录路由路径
export const LOGIN_PATH = '/login'

// 固定路由
export const constRoutes: Route.RouteRecordRaw[] = [
    {
        path: '/',
        name: 'root',
        component: 'Directory'
    },
    {
        path: LOGIN_PATH,
        component: 'Single',
        meta: { title: '登录' }
    },
    {
        path: '/:NotFound(.*)*',
        component: 'Single',
        meta: { title: '404' }
    } ]
