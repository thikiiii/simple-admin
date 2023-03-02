<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import { computed, ref } from 'vue'
import useAuthStore from '@/store/modules/auth'
import { useRoute } from 'vue-router'
import Logo from '@/layout/components/Logo.vue'
import MixSidebarDrawers from '@/layout/components/Sidebar/components/MixSidebar/components/MixSidebarDrawers.vue'

defineOptions({ name: 'MixSidebar' })

const appStore = useAppStore()
const { footer, sidebar } = appStore
const authStore = useAuthStore()
const route = useRoute()

const menus = ref<Route.RouteRecordRaw[]>([])
const temporaryActivePath = ref<Nullable<string>>()

const collapsedIconName = computed(() => sidebar.isCollapsedMix ? 'ant-design:double-right-outlined' : 'ant-design:double-left-outlined')

const handleMixMenuItem = (menu: Route.RouteRecordRaw) => {
    temporaryActivePath.value = menu.path
    if (menu.children?.length) {
        menus.value = menu.children
        appStore.toggleMixSidebarDrawerVisible(true)
    } else {
        authStore.handleMenuJumps(menu)
        if (!sidebar.isFixedMixSidebarDrawer) sidebar.mixSidebarDrawerVisible = false
        menus.value = []
    }
}

const isActive = (path: string) => {
    if (temporaryActivePath.value) return temporaryActivePath.value === path ? 'active' : undefined
    return route.matched.some(item => item.path === path) ? 'active' : undefined
}

const onMouseLeave = () => {
    !sidebar.isFixedMixSidebarDrawer && appStore.toggleMixSidebarDrawerVisible(false)
    temporaryActivePath.value = null
}

</script>

<template>
  <div @mouseleave="onMouseLeave" class="mixSidebar" :style="{width:`${appStore.dynamicMixSidebarWidth}px`}">
    <logo />
    <div class="mixSidebar-container">
      <div
          @click="handleMixMenuItem(item)"
          v-for="(item) in authStore.routes"
          :key="item.path"
          :class="isActive(item.path)"
          class="mixSidebar-container-menu">
        <svg-icon pointer :size="sidebar.isCollapsedMix ? 18: 22" :icon="item?.meta?.icon" />
        <span v-if="!sidebar.isCollapsedMix" class="mixMenu-list-item-text">{{ item?.meta?.title }}</span>
      </div>
    </div>
    <div
        @click="()=>appStore.toggleMixSidebarCollapsed()"
        class="mixSidebar-footer"
        :style="{height:`${footer.height}px`}">
      <svg-icon size="20" :icon="collapsedIconName" />
    </div>
    <mix-sidebar-drawers :menus="menus" />
  </div>
</template>

<style lang="less" scoped>
.mixSidebar {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid @line-shallow;
  position: relative;
  transition: .2s;
  padding: 7px;

  &-container {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 7px;

    &-menu {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 7px;
      gap: 7px;
      transition: .2s;
      border-radius: 7px;
      cursor: pointer;

      :deep(svg) {
        transition: width, height .2s ease-in-out;
      }

      &:hover:not(.active) {
        background: @full-deep;
      }

      &.active {
        background: @theme-shallow;
        color: @theme-main;
      }

      &-text {
        white-space: nowrap;
      }
    }
  }

  &-footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s;
    cursor: pointer;
    border-radius: @round-small;

    &:hover {
      background: @full-deep;
    }
  }
}
</style>
