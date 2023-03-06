<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'Echarts' })
const eChart = ref<HTMLElement | null>(null)
// onMo
</script>

<template>
  <div class="eChart" ref="eChart" />
</template>

<style lang="less" scoped>
.eChart {
  width: 100%;
  height: 100%;
}
</style>
