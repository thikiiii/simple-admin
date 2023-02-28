<script lang="ts" setup>
import Search from '@/layout/components/Header/components/Search/index.vue'
import FullScreen from '@/layout/components/Header/components/FullScreen.vue'
import Github from '@/layout/components/Header/components/Github.vue'
import MenuCollapsed from '@/layout/components/Header/components/MenuCollapsed.vue'
import Breadcrumb from '@/layout/components/Header/components/Breadcrumb.vue'
import ToggleTheme from '@/layout/components/Header/components/ToggleTheme.vue'
import Avatar from '@/layout/components/Header/components/Avatar.vue'
import Settings from '@/layout/components/Header/components/Settings/index.vue'
import useAppStore from '@/store/modules/app'
import Menu from '@/layout/components/Menu/index.vue'
import useAuthStore from '@/store/modules/auth'
import Logo from '@/layout/components/Logo.vue'

defineOptions({ name: 'HeaderContent' })
const { base, header } = useAppStore()
const authStore = useAuthStore()
console.log(base.isMobile || base.layoutMode === 'Side')
</script>

<template>
  <div class="layout-header" :style="{height:`${header.headerHeight}px`}">
    <flex-space style="flex: 1" size="large" justify="flex-start" direction="horizontal">
      <menu-collapsed v-if="base.isMobile||base.layoutMode==='Side'" />
      <breadcrumb v-if="base.layoutMode!=='Top'&&header.breadcrumbVisible" />
      <template v-if="base.layoutMode==='Top'&&!base.isMobile">
        <Logo />
        <Menu horizontal :menus="authStore.routes" />
      </template>
    </flex-space>
    <!--      <Menu :menus="authStore.routes" horizontal />-->
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

  &-menu {
    flex: 1;
  }
}
</style>
