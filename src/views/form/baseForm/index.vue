<script generic="T" lang="ts" setup>
defineOptions({ name: 'BaseForm' })
</script>

<template>
  <a-card style="height: 100%">
    <div class="test">
      <p v-for="item in 100" :key="item">16</p>
    </div>
  </a-card>
</template>

<style lang="less" scoped>
.test {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
