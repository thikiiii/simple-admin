<script lang="ts" setup>
import headerContent from '@/layout/components/headerContent/index.vue'
defineOptions({ name: 'Layout' })
</script>

<template>
  <a-layout class="h-full bg-base">
    <a-layout-sider class="bg-container">sider</a-layout-sider>
    <a-layout>
      <a-layout-header class="h-[56px] bg-container">
        <header-content />
      </a-layout-header>
      <a-layout-content>content</a-layout-content>
      <a-layout-footer class="h-[34px] bg-container">footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>

</style>
