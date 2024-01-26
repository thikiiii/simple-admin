// 仪表盘
import { RoleEnum } from '@/enums/auth'

export default {
    path: '/dashboard',
    component: 'basic',
    meta: {
        title: '控制台',
        icon: 'ic:baseline-monitor',
        order: 1
    },
    children: [
        {
            path: '/dashboard/analysis',
            name: 'dashboard_analysis',
            meta: {
                title: '分析页',
                roles: [ RoleEnum.SUPER ],
                keepAlive: true,
                affix: true
            },
            component: 'self'
        }
    ]
} as Route.RouteRecordRaw
