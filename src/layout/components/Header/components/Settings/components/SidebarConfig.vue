<script lang="ts" setup>
import ContextMenu from '@/layout/components/Header/components/Settings/components/ContextMenu.vue'
import useAppStore from '@/store/modules/app'
const appStore = useAppStore()
const { sidebar } = appStore
</script>

<template>
  <a-divider>侧边栏</a-divider>
  <flex-space direction="vertical">
    <context-menu label="折叠侧边栏">
      <a-switch v-model="sidebar.isCollapsed" />
    </context-menu>
    <context-menu label="侧边栏折叠宽度">
      <a-input-number mode="button" v-model="sidebar.sidebarWidth" :step="10" />
    </context-menu>
    <context-menu label="折叠混合侧边栏">
      <a-switch v-model="sidebar.isCollapsedMix" />
    </context-menu>
    <context-menu label="混合侧边栏宽度">
      <a-input-number mode="button" v-model="sidebar.mixSidebarWidth" :step="10" />
    </context-menu>
    <context-menu label="侧边栏折叠宽度">
      <a-input-number mode="button" v-model="sidebar.collapsedSidebarWidth" :step="10" />
    </context-menu>
    <context-menu label="菜单开启琴模式">
      <a-switch v-model="sidebar.isMenuAccordion" />
    </context-menu>
  </flex-space>
</template>

<style scoped>

</style>
