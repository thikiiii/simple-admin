<script lang="ts" setup>
import AnalysisStatisticsBar from '@/views/dashboard/analysis/components/statisticsBar/index.vue'

defineOptions({ name: 'DashboardAnalysis' })
</script>

<template>
  <div class="analysis">
    <analysis-statistics-bar />
  </div>
</template>

<style lang="less" scoped>
.analysis {
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 15px;
}
</style>
