<script setup lang="ts">
import Logo from '@/layout/components/Logo.vue'
import Menu from '@/layout/components/Menu/index.vue'
import MixMenu from '@/layout/components/Menu/components/MixMenu/index.vue'
import useAppStore from '@/store/modules/app'
import { computed } from 'vue'
import MobileSidebar from '@/layout/components/Sidebar/components/MobileSidebar.vue'

defineOptions({ name: 'LayoutSidebar' })

const { sidebar, base } = useAppStore()

const sidebarWidth = computed(() => {
    if (sidebar.isCollapsed) return sidebar.collapsedSidebarWidth
    else if (base.layoutMode === 'MixSide') return sidebar.mixedSidebarWidth
    else return sidebar.sidebarWidth
})

</script>

<template>
  <div
      v-if="!base.isMobile"
      :style="{width:`${sidebarWidth}px`}"
      class="bg-container flex flex-col items-center relative transition-[width] overflow-hidden">
    <logo />
    <div class="flex-1 overflow-auto w-full">
      <Menu v-if="base.layoutMode==='Side'" :collapsed="sidebar.isCollapsed" />
      <mix-menu v-else />
    </div>
  </div>
  <mobile-sidebar v-else />
</template>

<style scoped>

</style>
