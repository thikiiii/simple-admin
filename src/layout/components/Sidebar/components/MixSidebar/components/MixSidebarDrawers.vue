<script setup lang="ts">
import Menu from '@/layout/components/Menu/index.vue'
import useAppStore from '@/store/modules/app'

interface Props {
  menus:Route.RouteRecordRaw[]
}

defineProps<Props>()

const appStore = useAppStore()
const { sidebar, header } = appStore
</script>

<template>
  <transition name="fold">
  <div v-if="sidebar.mixSidebarDrawerVisible" :style="{width:`${sidebar.sidebarWidth}px`}" class="mixMenuDrawers">
    <div class="mixMenuDrawers-header" :style="{height:`${header.headerHeight}px`}">
      Thik Admin
      <svg-icon
          class="mixMenuDrawers-header-fixed"
          size="18"
          @click="appStore.toggleFixedMixSidebarDrawer()"
          :icon="sidebar.isFixedMixSidebarDrawer?'ant-design:pushpin-filled':'ant-design:pushpin-twotone'" />
    </div>
    <div :style="{width:`${sidebar.sidebarWidth}px`}" class="mixMenuDrawers-container">
      <Menu :menus="menus" />
    </div>
  </div>
  </transition>
</template>

<style lang="less" scoped>
.mixMenuDrawers {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border-left: 1px solid @line-shallow;
  border-right: 1px solid @line-shallow;
  transform: translateX(100%);
  z-index: 100;
  overflow: hidden;
  transition: width 0.2s ease-in-out;
  background: @bg-secondary;
  display: flex;
  flex-direction: column;

  &-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid @line-shallow;
    position: relative;
    white-space: nowrap;
    &-fixed {
      position: absolute;
      right: 10px;
      top: 5px;
      cursor: pointer;
    }
  }

  &-container{
    flex: 1;
    overflow: auto;
  }
}

.slideIn-enter-active,
.slideIn-leave-active {
  transition: 0.2s ;
  overflow: hidden;
}

.slideIn-enter-from,
.slideIn-leave-to {
  width: 0 !important;
}
</style>
