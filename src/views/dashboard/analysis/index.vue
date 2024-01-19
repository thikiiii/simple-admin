<script lang="ts" setup>
import { useRouter } from 'vue-router'

defineOptions({ name: 'DashboardAnalysis' })
const router = useRouter()
</script>

<template>
  <div class="analysis">
    <p
      class="bg-primary-shallow fill-amber-100 shadow-base"
      style="margin-bottom: 20px"
      v-for="item in 100" :key="item" @click="router.push({
      path:'/form/baseForm',
      query:{id:'8888'}
    })">test</p>
  </div>
</template>

<style lang="scss" scoped>
.analysis {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
