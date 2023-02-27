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
  <div v-if="!base.isMobile" :style="{width:`${sidebarWidth}px`}" class="layout-sidebar">
    <logo />
    <div class="layout-sidebar-container">
      <Menu v-if="base.layoutMode==='Side'" :collapsed="sidebar.isCollapsed" />
      <mix-menu v-else />
    </div>
  </div>
  <mobile-sidebar v-else />
</template>

<style lang="less" scoped>
.layout-sidebar {
  background: @bg-secondary;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: width .2s;
  overflow: hidden;
  &-container{
    flex: 1;
    overflow: auto;
    width: 100%;
  }
}
</style>
