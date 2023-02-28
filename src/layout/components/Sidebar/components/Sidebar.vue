<script lang="ts" setup>
import Logo from '@/layout/components/Logo.vue'
import Menu from '@/layout/components/Menu/index.vue'

import useAppStore from '@/store/modules/app'
import useAuthStore from '@/store/modules/auth'
const appStore = useAppStore()
const { sidebar } = appStore
const authStore = useAuthStore()
</script>

<template>
  <div class="sidebar" :style="{width:`${appStore.dynamicSidebarWidth}px`}">
    <logo />
    <div class="sidebar-container">
      <Menu :menus="authStore.routes" :collapsed="sidebar.isCollapsed" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: .2s;
  border-right: 1px solid @line-shallow;
  &-container{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
