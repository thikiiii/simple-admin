// 系统管理
import { RoleEnum } from '@/enums/auth'

const system: Route.RouteRecordRaw = {
    path: '/test',
    component: 'Directory',
    redirect: '/test/test1',
    name: 'test',
    meta: {
        title: '系统管理',
        icon: 'mdi:alert-decagram-outline',
        order: 2
    },
    children: [
        {
            path: '/test/test1',
            name: 'test_test1',
            meta: {
                title: '用户',
                order: 3,
                roles: [ RoleEnum.SUPER ]
            },
            component: 'Child'
        },
        {
            path: '/test/test_test2',
            name: 'test_test2',
            meta: {
                title: '角色',
                order: 1
            },
            component: 'Child'
        },
        {
            path: '/test/test_test3',
            name: 'test_test3',
            meta: {
                title: '角色',
                order: 1
            },
            component: 'Child'
        },
        {
            path: '/test/test_test4',
            name: 'test_test4',
            meta: {
                title: '角色',
                order: 1
            },
            component: 'Child'
        },
        {
            path: '/test/test_test5',
            name: 'test_test5',
            meta: {
                title: '角色',
                order: 1
            },
            component: 'Directory',
            children: [
                {
                    path: '/test/test_test5/test1',
                    name: 'test_test5_text1',
                    meta: {
                        title: '角999色',
                        order: 1
                    },
                    component: 'Child'
                }
            ]
        }

    ]
}
export default system
