<script lang="ts" setup>
</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="less" scoped>
.card {
  background: @theme-main;
  border-radius: @round-medium;
  padding: 15px;
  position: relative;
  overflow: hidden;
  color: @text-light;

  &:hover {
    &:before {
      transform: translate(50%, -50%) scale(1.1);
    }
    &:after{
      transform: translate(20%, -65%) scale(1.1);
    }
  }

  &:before {
    content: '';
    right: 0;
    top: 0;
    transition: .3s ease;
    width: 180px;
    height: 150px;
    transform: translate(50%, -50%);
    background: rgba(0, 0, 0, .1);
    border-radius: 100%;
    position: absolute;
  }

  &:after {
    content: '';
    right: 0;
    transition: .2s;
    top: 0;
    transform: translate(20%, -65%);
    width: 180px;
    height: 150px;
    background: rgba(0, 0, 0, .05);
    border-radius: 100%;
    position: absolute;
  }
}


</style>
