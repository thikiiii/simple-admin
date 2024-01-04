<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useRequest } from 'vue-request'
import { UserApi } from '@/services/api/user'
import useTabBarStore from '@/store/modules/tabBar'

defineOptions({ name: 'DashboardAnalysis' })
const router = useRouter()
let result = useRequest(UserApi.getRoutes)
console.log(result)
const tabBarStore = useTabBarStore()
console.log(tabBarStore.tabs)
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

<style lang="less" scoped>
.analysis {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
