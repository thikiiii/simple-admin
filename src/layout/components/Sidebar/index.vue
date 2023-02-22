<script setup lang="ts">
import Logo from '@/layout/components/Logo.vue'
import Menu from '@/layout/components/Menu/index.vue'

defineOptions({ name: 'LayoutSidebar' })
</script>

<template>
  <a-layout-sider class="bg-container">
    <logo />
    <Menu />
  </a-layout-sider>
</template>

<style scoped>

</style>
