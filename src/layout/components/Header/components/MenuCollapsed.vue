<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import { computed } from 'vue'

const { base, sidebar, toggleSidebarCollapsed, toggleMobileSidebarVisible } = useAppStore()

const isCollapsed = computed(() => base.isMobile ? sidebar.mobileSidebarVisible : sidebar.isCollapsed)

const iconName = computed(() => isCollapsed.value ? 'ant-design:menu-unfold-outlined' : 'ant-design:menu-fold-outlined')
const handle = () => {
    base.isMobile ? toggleMobileSidebarVisible() : toggleSidebarCollapsed()
}
</script>

<template>
  <svg-icon @click="handle" :icon="iconName" hover />
</template>

<style scoped>

</style>
