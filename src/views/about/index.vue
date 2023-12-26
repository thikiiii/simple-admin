<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div
@click="router.push({
      path:'/form/baseForm',
      query:{id:'9999'}
    })">
    about
  </div>
</template>

<style scoped>

</style>
