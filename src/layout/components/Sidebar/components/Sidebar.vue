<script lang="ts" setup>
import Logo from '@/layout/components/Logo.vue'
import Menu from '@/layout/components/Menu/index.vue'

import useAppStore from '@/store/modules/app'
import useAuthStore from '@/store/modules/auth'
import { computed } from 'vue'
const appStore = useAppStore()
const { sidebar,base } = appStore

const authStore = useAuthStore()
const isDark = computed(()=>base.layoutStyle === 'SideTopDark' || base.layoutStyle === 'SideDark')
</script>

<template>
  <div class="sidebar" :style="{width:`${appStore.dynamicSidebarWidth}px`}">
    <logo />
    <div class="sidebar-container">
      <Menu :dark="isDark" :menus="authStore.routes" :collapsed="sidebar.isCollapsed" />
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
