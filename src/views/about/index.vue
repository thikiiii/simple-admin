<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

defineOptions({ name: 'About' })
const appStore = useAppStore()
</script>

<template>
<a-button @click="appStore.base.layoutMode='MixSide'">测试</a-button>
</template>

<style scoped>

</style>
