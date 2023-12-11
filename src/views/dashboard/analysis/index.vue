<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useRequest } from 'vue-request'
import { UserApi } from '@/services/api/user'

defineOptions({ name: 'DashboardAnalysis' })
const router = useRouter()
let result = useRequest(UserApi.getRoutes)
console.log(result)
</script>

<template>
  <div class="analysis">
    <p
        v-for="item in 100" :key="item" @click="router.push({
      path:'/form/baseForm',
      query:{id:'8888'}
    })">test</p>
  </div>
</template>

<style lang="less" scoped>
.analysis {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
