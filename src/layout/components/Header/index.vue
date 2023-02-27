<script lang="ts" setup>
import Breadcrumb from '@/layout/components/Header/components/Breadcrumb.vue'
import Search from '@/layout/components/Header/components/Search/index.vue'
import MenuCollapsed from '@/layout/components/Header/components/MenuCollapsed.vue'
import FullScreen from '@/layout/components/Header/components/FullScreen.vue'
import Github from '@/layout/components/Header/components/Github.vue'
import ToggleTheme from '@/layout/components/Header/components/ToggleTheme.vue'
import Avatar from '@/layout/components/Header/components/Avatar.vue'
import Settings from '@/layout/components/Header/components/Settings/index.vue'
import useAppStore from '@/store/modules/app'

defineOptions({ name: 'HeaderContent' })
const { base,header } = useAppStore()
</script>

<template>
  <div class="layout-header" :style="{height:`${header.headerHeight}px`}">
    <flex-space size="large" justify="flex-start" direction="horizontal">
      <menu-collapsed />
      <breadcrumb v-if="!base.isMobile||header.breadcrumbVisible" />
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
.layout-header{
  width: 100%;
  height: 56px;
  background: @bg-secondary;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 18px;
}
</style>
