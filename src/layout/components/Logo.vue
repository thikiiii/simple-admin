<script setup lang="ts">
import useAppStore from '@/store/modules/app'
import { computed } from 'vue'

const { sidebar, base, header } = useAppStore()
const isHide = computed(() => sidebar.isCollapsed || base.layoutMode === 'mix-side')
</script>

<template>
  <div class="logo" :style="{height:`${header.headerHeight}px`}">
    <img height="28" src="../../assets/images/logo.png" alt="">
    <span v-if="!isHide" class="logo-text">Thik Admin</span>
  </div>
</template>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &-text {
    font-weight: bold;
    font-size: 18px;
    white-space: nowrap;
  }
}
</style>
