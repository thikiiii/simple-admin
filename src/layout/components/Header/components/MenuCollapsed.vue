<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import { computed } from 'vue'
import IconHoverContainer from '@/layout/components/Header/components/IconHoverContainer.vue'

const { base, sidebar, toggleSidebarCollapsed, toggleMobileSidebarVisible } = useAppStore()

const isCollapsed = computed(() => base.isMobile ? sidebar.mobileSidebarVisible : sidebar.isCollapsed)

const iconComponent = computed(() => isCollapsed.value ? IAntDesignMenuUnfoldOutlined : IAntDesignMenuFoldOutlined)
const handle = () => {
    base.isMobile ? toggleMobileSidebarVisible() : toggleSidebarCollapsed()
}
</script>

<template>
  <icon-hover-container @click="handle">
    <component :is="iconComponent" />
  </icon-hover-container>
</template>

<style scoped>

</style>
