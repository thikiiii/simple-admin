<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import useAuthStore from '@/store/modules/auth'

interface Props {
  menus: Route.RouteRecordRaw[]
}

defineProps<Props>()

const authStore = useAuthStore()
</script>

<template>
  <template v-for="menuItem in menus" :key="menuItem.path">
    <a-menu-item
        @click="authStore.handleMenuJumps(menuItem)"
        :key="menuItem.path"
        v-if="menuItem.component==='Self'||menuItem.component==='Child'">
      <template v-if="menuItem?.meta?.icon" #icon>
        <svg-icon size="16" :icon="menuItem?.meta.icon" />
      </template>
      {{ menuItem?.meta?.title }}
    </a-menu-item>
    <a-sub-menu :key="menuItem.path" v-if="menuItem.component==='Directory'">
      <template v-if="menuItem?.meta?.icon" #icon>
        <svg-icon size="16" :icon="menuItem?.meta.icon" />
      </template>
      <template #title>{{ menuItem?.meta?.title }}</template>
      <menu-item v-if="menuItem.children.length" :menus="menuItem.children" />
    </a-sub-menu>
  </template>
</template>

<style scoped>

</style>
