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
.iconHoverContainer{
  border-radius: @round-small;
  padding: 7px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .1s;
  &:hover{
    background: @full-shallow;
  }
  &.dark{
    background-color: @full-dark;
  }
}
</style>
