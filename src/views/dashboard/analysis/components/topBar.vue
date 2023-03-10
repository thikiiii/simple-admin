<script lang="ts" setup>
import Card from '@/views/dashboard/components/Card.vue'
import gsap from 'gsap'
import { onMounted, reactive } from 'vue'

defineOptions({ name: 'DashboardAnalysisTopBar' })
// 间距
const gap = 18

const tweened = reactive({
    sale: 0
})

onMounted(() => {
    gsap.to(tweened, {
        duration: 2,
        sale: 1000
    })
})
</script>

<template>
  <a-grid :cols="{xxl:3,xl:3,lg:2,md:2,sm:2,xs:1,}" :row-gap="gap" :col-gap="gap">
    <card class="topBar-bigCard">
      <div class="topBar-bigCard-text">
        <svg-icon size="55" local-icon="Budget" />
        <div class="topBar-bigCard-text-num">
          {{ tweened.sale.toFixed(2) }}￥
        </div>
        <p>销售额</p>
      </div>
      <div class="topBar-bigCard-chart" />
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
.topBar-bigCard {
  height: 180px;
  display: flex;

  &-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 15px;

    &-num {
      font-weight: bold;
      font-size: 28px;
    }
  }

  &-chart {
    flex: 1;
  }
}
</style>
