<script lang="ts" setup>
import Breadcrumb from '@/layout/components/headerContent/components/Breadcrumb.vue'
import Search from '@/layout/components/headerContent/components/Search.vue'
import MenuCollapsed from '@/layout/components/headerContent/components/MenuCollapsed.vue'
import FullScreen from '@/layout/components/headerContent/components/FullScreen.vue'
import Github from '@/layout/components/headerContent/components/Github.vue'
import Theme from '@/layout/components/headerContent/components/Theme.vue'
import Avatar from '@/layout/components/headerContent/components/Avatar.vue'
import Settings from '@/layout/components/headerContent/components/Settings/index.vue'
import HoverContaiter from '@/layout/components/headerContent/components/HoverContaiter.vue'

defineOptions({ name: 'HeaderContent' })
</script>

<template>
  <div class="w-full h-full flex justify-between items-center p-[10px] text-[18px]">
    <flex-space size="large" justify="flex-start" direction="horizontal">
      <menu-collapsed />
      <breadcrumb />
    </flex-space>
    <flex-space size="mini" justify="flex-end" direction="horizontal">
      <search />
      <theme />
      <full-screen />
      <github />
      <avatar />
      <hover-contaiter>
        <settings />
      </hover-contaiter>
    </flex-space>
  </div>
</template>

<style scoped>

</style>
