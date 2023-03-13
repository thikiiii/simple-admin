<script lang="ts" setup>
import Toatal from '@/views/dashboard/analysis/components/statisticsBar/components/Toatal.vue'

defineOptions({ name: 'StatisticsBar' })
const gap = 15
const statisticsBarCardData = [
  {
    title: '访客',
    count: 40509,
    lastWeek: '26%',
    svg: 'FeedbackAudience'
  },
  {
    title: '销售总额',
    count: 40509,
    lastWeek: '26%',
    svg: 'Budget'
  },
  {
    title: '成交额',
    count: 40509,
    lastWeek: '26%',
    svg: 'Investor'
  },
  {
    title: '成交数',
    count: 40509,
    lastWeek: '26%',
    svg: 'SEO'
  }
]
</script>

<template>
  <a-grid :cols="{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2, xxl: 2}" :col-gap="gap" :row-gap="gap">
    <a-grid :cols="{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2}" :col-gap="gap" :row-gap="gap">
    <toatal />
    </a-grid>
    <a-grid-item>2</a-grid-item>
  </a-grid>

</template>

<style lang="less" scoped>

</style>
