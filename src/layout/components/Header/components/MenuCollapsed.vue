<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import { computed } from 'vue'
import IconHoverContainer from '@/layout/components/Header/components/IconHoverContainer.vue'

const { base, sidebar, toggleSidebarCollapsed, toggleMobileSidebarVisible } = useAppStore()

const isCollapsed = computed(() => base.isMobile ? sidebar.mobileSidebarVisible : sidebar.isCollapsed)

const iconName = computed(() => isCollapsed.value ? 'ant-design:menu-unfold-outlined' : 'ant-design:menu-fold-outlined')
const handle = () => {
    base.isMobile ? toggleMobileSidebarVisible() : toggleSidebarCollapsed()
}
</script>

<template>
  <icon-hover-container @click="handle">
    <svg-icon :icon="iconName" />
  </icon-hover-container>
</template>

<style scoped>

</style>
