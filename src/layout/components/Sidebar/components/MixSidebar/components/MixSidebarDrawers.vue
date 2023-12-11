<script lang="ts" setup>
import Menu from '@/layout/components/Menu.vue'
import useAppStore from '@/store/modules/app'
import { nextTick } from 'vue'

interface Props {
    menus: Route.RouteRecordRaw[]
}

defineProps<Props>()

const appStore = useAppStore()
const { sidebar, header } = appStore

const onBeforeEnter = async (el: HTMLElement) => {
    await nextTick()
    const parentElement = el.parentElement?.parentElement
    if (parentElement) return parentElement.style.overflow = 'visible'
}

const onAfterLeave = async (el: HTMLElement) => {
    await nextTick()
    const parentElement = el.parentElement?.parentElement
    if (parentElement) parentElement.style.overflow = 'hidden'
}

</script>

<template>
    <transition name="fold" @after-leave="onAfterLeave" @before-enter="onBeforeEnter">
        <div
                v-show="sidebar.mixSidebarDrawerVisible"
                :class="appStore.dynamicSidebarDark.className"
                :style="{width:`${sidebar.sidebarWidth}px`}"
                class="mixMenuDrawers">
            <div :style="{height:`${header.headerHeight}px`}" class="mixMenuDrawers-header">
                Simple Admin
                <svg-icon
                        :icon="sidebar.isFixedMixSidebarDrawer?'ant-design:pushpin-filled':'ant-design:pushpin-twotone'"
                        class="mixMenuDrawers-header-fixed"
                        size="18"
                        @click="appStore.toggleFixedMixSidebarDrawer()" />
            </div>
            <div :style="{width:`${sidebar.sidebarWidth}px`}" class="mixMenuDrawers-container">
                <Menu :dark="appStore.dynamicSidebarDark.isDark" :menus="menus" />
            </div>
        </div>
    </transition>
</template>

<style lang="less" scoped>
.mixMenuDrawers {
  height: 100%;
  position: absolute;
  right: 1px;
  top: 0;
  border-left: 1px solid @border-secondary;
  border-right: 1px solid @border-secondary;
  transform: translateX(100%);
  z-index: 100;
  overflow: hidden;
  background: @bg-container;
  display: flex;
  flex-direction: column;

  &.dark {
    background: @bg-dark;
    color: @text-light;
    border-left: 1px solid @border-dark;
    border-right: 1px solid @border-dark;

    .mixMenuDrawers-header {
      border-bottom: 1px solid @border-dark;
    }
  }

  &-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid @border-secondary;
    position: relative;
    white-space: nowrap;

    &-fixed {
      position: absolute;
      right: 10px;
      top: 5px;
      cursor: pointer;
    }
  }

  &-container {
    flex: 1;
    overflow: auto;
  }
}

.slideIn-enter-active,
.slideIn-leave-active {
  transition: 0.2s;
  overflow: hidden;
}

.slideIn-enter-from,
.slideIn-leave-to {
  width: 0 !important;
}
</style>
