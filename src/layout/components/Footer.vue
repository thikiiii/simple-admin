<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

defineOptions({ name: 'LayoutFooter' })
const appStore = useAppStore()
const { footer } = appStore
</script>

<template>
  <div
      v-if="footer.visible" :style="{height:`${footer.height}px`}"
      class="layoutFooter">
    Copyright ©2022 Simple Admin
  </div>
</template>

<style lang="less" scoped>
.layoutFooter {
  display: flex;
  justify-content: center;
  align-items: center;
  background: @bg-container;
  width: 100%;
  flex-shrink: 0;
  box-shadow: @shadow-base;
}
</style>
