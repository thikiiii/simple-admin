<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

defineOptions({ name: 'LayoutFooter' })
const appStore = useAppStore()
const { footer } = appStore
</script>

<template>
  <div v-if="footer.visible" class="layoutFooter" :style="{height:`${footer.height}px`}" :class="footer.isFixed ? 'fixed' : undefined">
    Copyright ©2022 Thik Admin
  </div>
</template>

<style lang="less" scoped>
.layoutFooter {
  display: flex;
  justify-content: center;
  align-items: center;
  background: @bg-secondary;
  width: 100%;
  flex-shrink: 0;
  box-shadow: 0 0 5px @shadow;
  transition: 0.2s ease-in-out;

  &.fixed {
    position: sticky;
    bottom: 0;
  }
}
</style>
