<script lang="ts" setup>
import ContextMenu from '@/layout/components/Header/components/Settings/components/ContextMenu.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
const { header } = appStore
</script>

<template>
  <a-divider>头部</a-divider>
  <flex-space direction="vertical">
    <context-menu label="固定头部和多页签">
      <a-switch v-model="header.isFixedHeaderAndTabBar" />
    </context-menu>
    <context-menu label="头部高度">
      <a-input-number mode="button" v-model="header.headerHeight" :step="10" />
    </context-menu>
    <context-menu label="标签栏高度">
      <a-input-number mode="button" v-model="header.tabBarHeight" :step="10" />
    </context-menu>
    <context-menu label="显示标签栏">
      <a-switch v-model="header.tabBarVisible" />
    </context-menu>
    <context-menu label="显示面包屑">
      <a-switch v-model="header.breadcrumbVisible" />
    </context-menu>
  </flex-space>
</template>

<style scoped>

</style>
