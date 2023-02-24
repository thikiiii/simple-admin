<script lang="ts" setup>
import LayoutHeader from '@/layout/components/Header/index.vue'
import LayoutSidebar from '@/layout/components/Sidebar/index.vue'

defineOptions({ name: 'Layout' })

</script>

<template>
  <div class="h-full bg-base flex">
    <layout-sidebar />
    <div class="flex flex-col flex-1 overflow-auto">
      <layout-header />
      <div class="flex-1 p-[1em]">
        <router-view />
      </div>
      <div class="h-[34px] bg-container">footer</div>
    </div>
  </div>
</template>

<style scoped>

</style>
