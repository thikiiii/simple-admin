<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { useRouter } from 'vue-router'
import { RouterHelpers } from '@/router/helpers'

interface Props {
  menus: Route.RouteRecordRaw[]
}

defineProps<Props>()

const router = useRouter()

const handleMenu = (route) => {
    RouterHelpers.isExternalLink(route.path) ? RouterHelpers.openTheLink(route.path) : router.push(route.path)
}
</script>

<template>
  <template v-for="menuItem in menus" :key="menuItem.path">
    <a-menu-item
        @click="handleMenu(menuItem)"
        :key="menuItem.path"
        v-if="menuItem.component==='Self'||menuItem.component==='Child'">
      <template v-if="menuItem?.meta?.icon" #icon>
        <svg-icon size="18" :icon="menuItem?.meta.icon" />
      </template>
      {{ menuItem?.meta?.title }}
    </a-menu-item>
    <a-sub-menu :key="menuItem.path" v-if="menuItem.component==='Directory'">
      <template v-if="menuItem?.meta?.icon" #icon>
        <svg-icon size="18" :icon="menuItem?.meta.icon" />
      </template>
      <template #title>{{ menuItem?.meta?.title }}</template>
      <menu-item v-if="menuItem.children.length" :menus="menuItem.children" />
    </a-sub-menu>
  </template>

</template>

<style scoped>

</style>
