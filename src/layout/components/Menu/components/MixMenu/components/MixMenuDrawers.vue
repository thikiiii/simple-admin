<script setup lang="ts">

</script>

<template>
  <div class="mixMenuDrawers">
    <div class="mixMenuDrawers-header">
      Thik Admin
    </div>
  </div>
</template>

<style lang="less" scoped>
.mixMenuDrawers {
  width: 220px;
  height: 100%;
  position: absolute;
  right: -1px;
  top: 0;
  transform: translateX(100%);
  z-index: 100;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  background: @bg-secondary;
}
</style>
