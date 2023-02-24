declare namespace Route {
    /**
     * 路由组件类型
     * Single 单页面 （类似登录页）
     * Self 没有目录的菜单
     * Directory 目录
     * Child 目录下面的菜单
     * */
    type RouteComponentType = 'Single' | 'Self' | 'Directory' | 'Child'

    interface RouteRecordRaw
        extends Omit<
            import('vue-router').RouteRecordRaw,
            'component' | 'components' | 'children' | 'name'
        > {
        // 组件类型
        component: RouteComponentType

        components?: never

        children?: RouteRecordRaw[]

        name?:string
    }

    // 路由元数据
    interface Meta {
        // 名称
        title: string

        // 细粒度权限
        permissions?: import('@/enums/auth').PermissionEnum[]

        // 角色
        roles?: import('@/enums/auth').RoleEnum[]

        // 忽略鉴权，用户可以直接访问
        ignoreAuth?:boolean

        // 是否缓存
        keepAlive?: boolean

        // 是否固定在tab上
        affix?: boolean

        // 图标
        icon?: string

        // 内部嵌套地址
        frameSrc?: string

        // 菜单排序
        order?: number

        // 隐藏菜单
        hideMenu?: boolean
    }
}
