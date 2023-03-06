<script lang="ts" setup>
import Card from '@/views/dashboard/components/Card.vue'
import gsap from 'gsap'

defineOptions({ name: 'DashboardAnalysisTopBar' })
// 间距
const gap = 18
</script>

<template>
  <a-grid :cols="{xxl:3,xl:3,lg:2,md:2,sm:2,xs:1,}" :row-gap="gap" :col-gap="gap">
    <card style="height: 180px">
        <svg-icon size="50" local-icon="Budget" />
        <a-statistic :value="50.52" :precision="2" :value-from="0" animation>
          <template #suffix>￥</template>
        </a-statistic>
    </card>
    <card style="height: 180px" />
    <a-grid-item :span="{xxl:1,xl:1,lg:2,md:2,sm:2,xs:1}">
      <a-grid :cols="{xxl:1,xl:1,lg:2,md:2,sm:2,xs:1}" :row-gap="gap" :col-gap="gap">
        <card style="height: 81px" />
        <card style="height: 81px" />
      </a-grid>
    </a-grid-item>
  </a-grid>
</template>

<style lang="less" scoped>
.dashboardAnalysisTopBar {
  height: 100%;
  width: 100%;
}
</style>
