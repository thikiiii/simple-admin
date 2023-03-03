<script setup lang="ts">
import SearchModal from '@/layout/components/Header/components/Search/components/SearchModal.vue'
import { useToggle } from '@vueuse/core'
import IconHoverContainer from '@/layout/components/Header/components/IconHoverContainer.vue'

defineOptions({ name: 'Search' })
const [ visible, toggleVisible ] = useToggle()
</script>

<template>
  <icon-hover-container @click="toggleVisible">
    <svg-icon icon="ant-design:search-outlined" />
  </icon-hover-container>
  <search-modal v-model:visible="visible" />
</template>

<style scoped>

</style>
