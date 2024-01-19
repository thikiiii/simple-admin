<script setup lang="ts">
import type { SuperTableProps } from '@/components/antd/SuperTable/typs'


const props = defineProps<SuperTableProps>()
console.log(props)
</script>

<template>
  <a-table v-bind="props" />
</template>

<style scoped lang="scss">

</style>
