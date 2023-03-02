<script setup lang="ts">
import useAppStore from '@/store/modules/app'
import Logo from '@/layout/components/Logo.vue'
import Menu from '@/layout/components/Menu/index.vue'
import useAuthStore from '@/store/modules/auth'
const appStore = useAppStore()
const { sidebar } = appStore
const authStore = useAuthStore()
</script>

<template>
<a-drawer :width="sidebar.sidebarWidth" placement="left" v-model:visible="sidebar.mobileSidebarVisible" :header="false" unmount-on-close :footer="false" :hide-cancel="false">
  <div :class="appStore.dynamicSidebarDark.className" class="mobileSidebar ">
    <logo />
    <div class="mobileSidebar-container">
      <Menu :menus="authStore.routes" />
    </div>
  </div>
</a-drawer>
</template>

<style lang="less" scoped>
  .mobileSidebar{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    &.dark{
      background: @bg-secondary;
      color: @text-light;
    }
    &-container{
      display: flex;
      overflow: auto;
    }
  }
</style>
