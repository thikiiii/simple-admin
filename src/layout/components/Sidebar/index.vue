<script setup lang="ts">
import useAppStore from '@/store/modules/app'
import { computed } from 'vue'
import MobileSidebar from '@/layout/components/Sidebar/components/MobileSidebar.vue'
import Sidebar from '@/layout/components/Sidebar/components/Sidebar.vue'
import MixSidebar from '@/layout/components/Sidebar/components/MixSidebar/index.vue'

defineOptions({ name: 'LayoutSidebar' })

const appStore = useAppStore()
const { sidebar, base } = appStore
const sidebarWidth = computed(() => {
    switch (base.layoutMode) {
        case 'side':
            return appStore.dynamicSidebarWidth
        case 'mix-side':
            return sidebar.isFixedMixSidebarDrawer ?
                appStore.dynamicMixSidebarWidth + sidebar.sidebarWidth :
                appStore.dynamicMixSidebarWidth
        default:
            return sidebar.sidebarWidth
    }
})


</script>

<template>
  <transition name="fold">
    <div
        v-if="!base.isMobile && base.layoutMode!=='top'"
        :class="appStore.dynamicSidebarDark.className"
        :style="{width:`${sidebarWidth}px`}"
        class="layout-sidebar">
      <transition name="slide-left">
        <Sidebar v-if="base.layoutMode==='side'" />
        <mix-sidebar v-else-if="base.layoutMode==='mix-side'" />
      </transition>
    </div>
  </transition>
  <mobile-sidebar v-if="base.isMobile" />
</template>

<style lang="less" scoped>
.layout-sidebar {
  background: @bg-secondary;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: width .2s ease-in-out;
  overflow: hidden;

  &.dark {
    background: @bg-dark;
    color: @text-light;
  }

  &-container {
    flex: 1;
    overflow: auto;
    width: 100%;
  }
}
</style>
