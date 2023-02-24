// 系统管理
import { RoleEnum } from '@/enums/auth'

const system: Route.RouteRecordRaw = {
    path: '/system',
    component: 'Directory',
    redirect: '/system/user',
    name: 'system',
    meta: {
        title: '系统管理',
        icon: 'mdi:alert-decagram-outline',
        order: 2
    },
    children: [
        {
            path: '/system/user',
            name: 'system-user',
            meta: {
                title: '用户',
                order: 3,
                roles: [ RoleEnum.SUPER ]
            },
            component: 'Child'
        },
        {
            path: '/system/role',
            name: 'system-role',
            meta: {
                title: '角色',
                order: 1,
                roles: [ RoleEnum.TEST ]
            },
            component: 'Child'
        },
        {
            path: '/system/menu',
            name: 'system-menu',
            meta: {
                roles: [ RoleEnum.SUPER ],
                title: '菜单',
                order: 2
            },
            component: 'Child'
        }
    ]
}
export default system
