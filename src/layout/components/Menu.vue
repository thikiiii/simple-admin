<script lang="tsx">
import { defineComponent, PropType } from 'vue'
import { useRoute } from 'vue-router'
import useAppStore from '@/store/modules/app'
import useAuthStore from '@/store/modules/auth'

export default defineComponent({
    props: {
        menus: {
            type: Array as PropType<Route.RouteRecordRaw[]>,
            required: true
        },
        horizontal: Boolean,
        collapsed: Boolean,
        dark: Boolean
    },
    setup(props) {
        const route = useRoute()
        const { sidebar } = useAppStore()
        const authStore = useAuthStore()
        const renderSubMenu = (menus: Route.RouteRecordRaw[]) => {
            return menus.map(item => {
                const icon = () => item.meta?.icon ? (<svg-icon size="14" icon={ item.meta?.icon }></svg-icon>) : undefined
                if (item.component === 'Self' || item.component === 'Child') {
                    return (
                        <a-menu-item onClick={()=>authStore.handleMenuJumps(item)} key={ item.path }
                            v-slots={ { icon } }>
                            { item.meta?.title }
                        </a-menu-item>
                    )
                }

                if (item.component === 'Directory') {
                    return (
                        <a-sub-menu v-slots={ { icon, title: () => item.meta?.title } }
                            key={ item.path }>
                            { item.children?.length && renderSubMenu(item.children) }
                        </a-sub-menu>
                    )
                }
            })
        }

        return () => (
            <a-menu theme={ props.dark ? 'dark' : 'light' } selected-keys={ [ route.path ] } collapsed={ props.collapsed } accordion={ sidebar.isMenuAccordion }
                mode={ props.horizontal ? 'horizontal' : 'vertical' }>
                { renderSubMenu(props.menus) }
            </a-menu>
        )
    }
})
</script>
