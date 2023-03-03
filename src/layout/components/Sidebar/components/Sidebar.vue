<script lang="ts" setup>
import Logo from '@/layout/components/Logo.vue'
import Menu from '@/layout/components/Menu/index.vue'

import useAppStore from '@/store/modules/app'
import useAuthStore from '@/store/modules/auth'
import { computed } from 'vue'
const appStore = useAppStore()
const { sidebar } = appStore

const authStore = useAuthStore()
</script>

<template>
  <div class="sidebar" :class="appStore.dynamicSidebarDark.className" :style="{width:`${appStore.dynamicSidebarWidth}px`}">
    <logo />
    <div class="sidebar-container">
      <Menu :dark="appStore.dynamicSidebarDark.isDark" :menus="authStore.routes" :collapsed="sidebar.isCollapsed" />
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
  &.dark{
    border-right: 1px solid @line-dark;
  }
  &-container{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
