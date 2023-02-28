<script setup lang="ts">
import useAppStore from '@/store/modules/app'
import Logo from '@/layout/components/Logo.vue'
import Menu from '@/layout/components/Menu/index.vue'
import useAuthStore from '@/store/modules/auth'
const { sidebar } = useAppStore()
const authStore = useAuthStore()
</script>

<template>
<a-drawer :width="sidebar.sidebarWidth" placement="left" v-model:visible="sidebar.mobileSidebarVisible" :header="false" unmount-on-close :footer="false" :hide-cancel="false">
  <div class="mobileSidebar ">
    <logo />
    <div class="mobileSidebar-container">
      <Menu :menus="authStore.routes" />
    </div>
  </div>
</a-drawer>
</template>

<style lang="less" scoped>
:global(.arco-drawer-body) {
  padding: 0;
}
.mobileSidebar{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &-container{
    display: flex;
    overflow: auto;
  }
}
</style>
