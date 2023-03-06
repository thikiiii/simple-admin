<script lang="ts" setup>
import TopBar from '@/views/dashboard/analysis/components/topBar.vue'

defineOptions({ name: 'DashboardAnalysis' })
</script>

<template>
  <div class="dashboardAnalysis">
   <top-bar />
  </div>
</template>

<style lang="less" scoped>
.dashboardAnalysis {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 15px;
}
</style>
