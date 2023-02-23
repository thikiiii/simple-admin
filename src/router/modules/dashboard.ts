// 仪表盘
import { RoleEnum } from '@/enums/auth'

const dashboard: Route.RouteRecordRaw = {
    path: '/dashboard',
    component: 'Directory',
    redirect: '/dashboard/analysis',
    meta: {
        title: '控制台',
        icon: 'mdi:monitor-dashboard',
        orderNo: 1
    },
    children: [ {
        path: '/dashboard/analysis',
        meta: {
            title: '分析页',
            keepAlive: true,
            affix: true
        },
        component: 'Child'
    } ]
}
export default dashboard
