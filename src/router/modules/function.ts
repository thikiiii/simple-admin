export default {
    path: '/function',
    component: 'basic',
    name: 'function',
    meta: {
        title: '功能',
        icon: 'ic:baseline-assignment-turned-in',
        order: 1
    },
    children: [
        {
            path: '/function/maps',
            name: 'function_maps',
            meta: {
                title: '地图'
            },
            component: 'multi',
            children: [
                {
                    path: '/function/maps/twoDimensionalMap',
                    name: 'function_maps_twoDimensionalMap',
                    component: 'self',
                    meta: {
                        title: '二维地图'
                    }
                }
            ]
        },
        {
            path: '/function/multilevelMenu',
            name: 'function_multilevelMenu',
            meta: {
                title: '多级菜单'
            },
            component: 'multi',
            children: [
                {
                    path: '/function/multilevelMenu/menu-1',
                    name: 'function_multilevelMenu_menu-1',
                    component: 'multi',
                    meta: {
                        title: 'menu-1'
                    },
                    children: [
                        {
                            path: '/function/multilevelMenu/menu-1/menu-1-1',
                            name: 'function_multilevelMenu_menu-1_menu-1-1',
                            component: 'multi',
                            meta: {
                                title: 'menu-1-1'
                            },
                            children: [
                                {
                                    path: '/function/multilevelMenu/menu-1/menu-1-1/menu-1-1-1',
                                    name: 'function_multilevelMenu_menu-1_menu-1-1_menu-1-1-1',
                                    component: 'self',
                                    meta: {
                                        title: 'menu-1-1-1'
                                    }
                                }
                            ]
                        },
                        {
                            path: '/function/multilevelMenu/menu-1/menu-1-2',
                            name: 'function_multilevelMenu_menu-1_menu-1-2',
                            component: 'self',
                            meta: {
                                title: 'menu-1-2'
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/function/print',
            name: 'function_print',
            component: 'self',
            meta: {
                title: '打印'
            }
        }
    ]
} as Route.RouteRecordRaw
