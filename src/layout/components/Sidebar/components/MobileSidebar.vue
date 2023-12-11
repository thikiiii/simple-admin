<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import Logo from '@/layout/components/Logo.vue'
import Menu from '@/layout/components/Menu.vue'
import useAuthStore from '@/store/modules/auth'

const appStore = useAppStore()
const { sidebar } = appStore
const authStore = useAuthStore()
</script>

<template>
    <a-drawer
v-model:open="sidebar.mobileSidebarVisible" :footer="false" :header="false" :hide-cancel="false"
              :width="sidebar.sidebarWidth" placement="left" unmount-on-close>
        <div :class="appStore.dynamicSidebarDark.className" class="mobileSidebar ">
            <logo />
            <div class="mobileSidebar-container">
                <Menu :menus="authStore.routes" />
            </div>
        </div>
    </a-drawer>
</template>

<style lang="less" scoped>
.mobileSidebar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;

  &.dark {
    background: @bg-container;
    color: @text-light;
  }

  &-container {
    display: flex;
    overflow: auto;
  }
}
</style>
