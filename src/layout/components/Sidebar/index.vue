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
        case 'Side':
            return appStore.dynamicSidebarWidth
        case 'MixSide':
            return sidebar.isFixedMixSidebarDrawer ?
                appStore.dynamicMixSidebarWidth + sidebar.sidebarWidth :
                appStore.dynamicMixSidebarWidth
        default:
            return sidebar.sidebarWidth
    }
})


</script>

<template>
  <transition name="slideIn">
    <div v-if="!base.isMobile && base.layoutMode!=='Top'" :style="{width:`${sidebarWidth}px`}" class="layout-sidebar">
      <transition name="full">
        <Sidebar v-if="base.layoutMode==='Side'" />
        <mix-sidebar v-else />
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

  &-container {
    flex: 1;
    overflow: auto;
    width: 100%;
  }
}

.slideIn-enter-active,
.slideIn-leave-active {
  transition: 0.2s;
  overflow: hidden;
}

.slideIn-enter-from,
.slideIn-leave-to {
  width: 0 !important;
}


.full-enter-active,
.full-leave-active {
  transition: 0.2s ease;
  position: absolute;
}

.full-enter-from,
.full-leave-to {
  width: 100%;
  opacity: 0;
  transform: scale(0.9) skew(15deg);
}
</style>
