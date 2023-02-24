// 仪表盘
import { RoleEnum } from '@/enums/auth'

const dashboard: Route.RouteRecordRaw = {
    path: '/dashboard',
    component: 'Directory',
    redirect: '/dashboard/analysis',
    name: 'dashboard',
    meta: {
        title: '控制台',
        icon: 'mdi:monitor-dashboard',
        order: 1
    },
    children: [ {
        path: '/dashboard/analysis',
        name: 'dashboard-analysis',
        meta: {
            title: '分析页',
            roles: [ RoleEnum.SUPER ],
            keepAlive: true,
            affix: true
        },
        component: 'Child'
    } ]
}
export default dashboard
