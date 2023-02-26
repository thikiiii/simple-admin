<script setup lang="ts">
import useAppStore from '@/store/modules/app'
import Logo from '@/layout/components/Logo.vue'
import Menu from '@/layout/components/Menu/index.vue'
const { sidebar } = useAppStore()
</script>

<template>
<a-drawer :width="sidebar.sidebarWidth" placement="left" v-model:visible="sidebar.mobileSidebarVisible" :header="false" unmount-on-close :footer="false" :hide-cancel="false">
  <div class="w-full h-full flex flex-col">
    <logo />
    <div class="flex-1 overflow-auto">
      <Menu />
    </div>
  </div>
</a-drawer>
</template>

<style scoped>
:global(.arco-drawer-body) {
  padding: 0;
}
</style>
