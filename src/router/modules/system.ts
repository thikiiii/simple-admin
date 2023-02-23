// 系统管理
import { RoleEnum } from '@/enums/auth'

const system: Route.RouteRecordRaw = {
    path: '/system',
    component: 'Directory',
    redirect: '/system/user',
    meta: {
        title: '系统管理',
        icon: 'mdi:alert-decagram-outline',
        orderNo: 2
    },
    children: [
        {
            path: '/system/user',
            meta: {
                title: '用户',
                roles: [ RoleEnum.SUPER ]
            },
            component: 'Child'
        },
        {
            path: '/system/role',
            meta: {
                title: '角色',
                roles: [ RoleEnum.TEST ]
            },
            component: 'Child'
        },
        {
            path: '/system/menu',
            meta: {
                roles: [ RoleEnum.SUPER ],
                title: '菜单'
            },
            component: 'Child'
        }
    ]
}
export default system
