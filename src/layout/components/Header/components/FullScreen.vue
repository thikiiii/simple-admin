<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
import { computed } from 'vue'
import IconHoverContainer from '@/layout/components/Header/components/IconHoverContainer.vue'
const { isFullscreen,toggle } = useFullscreen()
const iconName = computed(()=>!isFullscreen ? 'ant-design:expand-outlined' : 'ant-design:compress-outlined')
</script>

<template>
  <icon-hover-container @click="toggle">
  <svg-icon :icon="iconName" />
  </icon-hover-container>
</template>
