<script lang="ts" setup>
import Breadcrumb from '@/layout/components/Header/components/Breadcrumb.vue'
import Search from '@/layout/components/Header/components/Search/index.vue'
import MenuCollapsed from '@/layout/components/Header/components/MenuCollapsed.vue'
import FullScreen from '@/layout/components/Header/components/FullScreen.vue'
import Github from '@/layout/components/Header/components/Github.vue'
import ToggleTheme from '@/layout/components/Header/components/ToggleTheme.vue'
import Avatar from '@/layout/components/Header/components/Avatar.vue'
import Settings from '@/layout/components/Header/components/Settings/index.vue'

defineOptions({ name: 'HeaderContent' })
</script>

<template>
  <a-layout-header class="h-[56px] bg-container w-full  flex justify-between items-center p-[10px] text-[18px]">
    <flex-space size="large" justify="flex-start" direction="horizontal">
        <menu-collapsed />
      <breadcrumb />
    </flex-space>
    <flex-space justify="flex-end" direction="horizontal">
      <search />
      <toggle-theme />
      <full-screen />
      <github />
      <avatar />
      <settings />
    </flex-space>
  </a-layout-header>
</template>

<style scoped>

</style>
