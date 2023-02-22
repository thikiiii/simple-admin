<script lang="ts" setup>
import LayoutHeader from '@/layout/components/Header/index.vue'
import LayoutSidebar from '@/layout/components/Sidebar/index.vue'

defineOptions({ name: 'Layout' })

</script>

<template>
  <a-layout class="h-full bg-base">
    <layout-sidebar />
    <a-layout>
      <layout-header />
      <a-layout-content />
      <a-layout-footer class="h-[34px] bg-container">footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>

</style>
