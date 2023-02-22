<script setup lang="ts">
import SearchModal from '@/layout/components/Header/components/Search/components/SearchModal.vue'
import { useToggle } from '@vueuse/core'

defineOptions({ name: 'Search' })
const [ visible, toogleVisible ] = useToggle()
</script>

<template>
      <svg-icon @click="toogleVisible" icon="ant-design:search-outlined" hover />
    <search-modal v-model:visible="visible" />
</template>

<style scoped>

</style>
