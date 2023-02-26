<script setup lang="ts">
import MenuItem from '@/layout/components/Menu/components/MenuItem.vue'
import useAuthStore from '@/store/modules/auth'
import { useRoute } from 'vue-router'
import useAppStore from '@/store/modules/app'

interface Props {
  collapsed?:boolean
}

defineProps<Props>()

defineOptions({ name: 'Menu' })
const authStore = useAuthStore()
const route = useRoute()
const { sidebar } = useAppStore()
</script>

<template>
  <a-menu :collapsed="collapsed" :accordion="sidebar.isMenuAccordion" :selected-keys="[route.path]">
    <menu-item :menus="authStore.routes" />
  </a-menu>
</template>

<style lang="less" scoped>

</style>
