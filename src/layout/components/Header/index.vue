<script lang="ts" setup>
import Search from '@/layout/components/Header/components/Search/index.vue'
import FullScreen from '@/layout/components/Header/components/FullScreen.vue'
import Github from '@/layout/components/Header/components/Github.vue'
import MenuCollapsed from '@/layout/components/Header/components/MenuCollapsed.vue'
import Breadcrumb from '@/layout/components/Header/components/Breadcrumb/index.vue'
import ToggleTheme from '@/layout/components/Header/components/ToggleTheme.vue'
import Avatar from '@/layout/components/Header/components/Avatar.vue'
import Settings from '@/layout/components/Header/components/Settings/index.vue'
import useAppStore from '@/store/modules/app'
import Menu from '@/layout/components/Menu/index.vue'
import useAuthStore from '@/store/modules/auth'
import Logo from '@/layout/components/Logo.vue'

defineOptions({ name: 'HeaderContent' })
const appStore = useAppStore()
const { base, header } = appStore
const authStore = useAuthStore()
</script>

<template>
  <div :class="appStore.dynamicTopDark.className" class="layout-header" :style="{height:`${header.headerHeight}px`}">
    <flex-space style="flex: 1" size="large" justify="flex-start" direction="horizontal">
      <menu-collapsed v-if="base.isMobile||base.layoutMode==='side'" />
      <breadcrumb v-if="base.layoutMode!=='top'&&header.breadcrumbVisible" />
      <template v-if="base.layoutMode==='top'&&!base.isMobile">
        <Logo />
        <Menu :dark="appStore.dynamicTopDark.isDark" horizontal :menus="authStore.routes" />
      </template>
    </flex-space>
    <flex-space justify="flex-end" direction="horizontal">
      <search />
      <toggle-theme />
      <full-screen />
      <github />
      <avatar />
      <settings />
    </flex-space>
  </div>
</template>

<style lang="less" scoped>
.layout-header {
  width: 100%;
  height: 56px;
  background: @bg-secondary;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 18px;
  overflow: hidden;
  border-bottom: 1px solid @line-shallow;
  flex-shrink: 0;
  transition: height .2s ease-in-out;
  &.dark {
    background: @bg-dark;
    color: @text-light;
    border-bottom: 1px solid @line-dark;
  }

  &.fixed {
    
  }

  &-menu {
    flex: 1;
  }
}
</style>
