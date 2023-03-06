<script lang="ts" setup>
import LayoutHeader from '@/layout/components/Header/index.vue'
import LayoutSidebar from '@/layout/components/Sidebar/index.vue'
import LayoutMain from '@/layout/components/Main.vue'
import LayoutFooter from '@/layout/components/Footer.vue'
import TabBar from '@/layout/components/TabBar.vue'
import useAppStore from '@/store/modules/app'

defineOptions({ name: 'Layout' })
const appStore = useAppStore()
const { header } = appStore
</script>

<template>
  <div class="layout ">
    <layout-sidebar />
    <div class="layout-container">
      <div :class="{fixed:header.isFixedHeaderAndTabBar}">
        <layout-header />
        <tab-bar />
      </div>
      <layout-main />
      <layout-footer />
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  background: @bg-main;
  display: flex;

  &-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .fixed {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
  }
}
</style>
