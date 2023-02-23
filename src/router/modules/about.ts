const about: Route.RouteRecordRaw = {
    path: '/about',
    meta: {
        title: '关于',
        // roles: [ RoleEnum.SUPER ],
        icon: 'mdi:account-arrow-down-outline',
        keepAlive: true,
        orderNo: 3,
        affix: true
    },
    component: 'Self'
}
export default about
