<script setup lang="ts">
import MenuItem from '@/layout/components/Menu/components/MenuItem.vue'
import { useRoute } from 'vue-router'
import useAppStore from '@/store/modules/app'

interface Props {
  // 折叠
  collapsed?:boolean
  // 水平
  horizontal?:boolean
  // 菜单
  menus:Route.RouteRecordRaw[]
}

defineProps<Props>()

defineOptions({ name: 'Menu' })
const route = useRoute()
const { sidebar } = useAppStore()
</script>

<template>
  <a-menu :mode="horizontal?'horizontal':'vertical'" :collapsed="collapsed" :accordion="sidebar.isMenuAccordion" :selected-keys="[route.path]">
    <menu-item :menus="menus" />
  </a-menu>
</template>

<style lang="less" scoped>

</style>
