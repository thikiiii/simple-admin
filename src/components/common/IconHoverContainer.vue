<script lang="ts" setup>
</script>

<template>
  <div class="iconHoverContainer">
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
    background: @full-deep;
  }
}
</style>
