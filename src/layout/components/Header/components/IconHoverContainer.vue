<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
    <div :class="appStore.dynamicTopDark.className" class="iconHoverContainer">
        <slot />
    </div>
</template>

<style lang="less" scoped>
.iconHoverContainer {
  border-radius: @radius-base;
  padding: 7px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .1s;

  &:hover {
    background: @fill-tertiary;
  }

  &.dark {
    &:hover {
      background-color: @fill-dark;
    }
  }
}
</style>
