export default {
    path: '/form',
    component: 'basic',
    name: 'form',
    meta: {
        title: '表单',
        icon: 'mdi:form-select',
        order: 1
    },
    children: [
        {
            path: '/form/baseForm',
            name: 'form_baseForm',
            meta: {
                title: '基础表单'
            },
            component: 'self'
        }
    ]
} as Route.RouteRecordRaw
