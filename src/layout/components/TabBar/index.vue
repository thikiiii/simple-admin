<script setup lang="ts">
import useAppStore from '@/store/modules/app'

defineOptions({ name: 'TabBar' })
const appStore = useAppStore()
const { header } = appStore
</script>

<template>
  <div class="tabBar" :style="{height:`${header.tabBarHeight}px`}">
    <div class="tabBar-item">
      测试
    </div>
  </div>
</template>

<style lang="less" scoped>
.tabBar {
  width: 100%;
  background: @bg-main;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-item {
    height: 100%;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: @bg-secondary;
    border-radius: @round-small;
    border: 1px solid @line-shallow;
    user-select: none;
    cursor:pointer;
    box-shadow: 5px 5px 5px  rgba(0,0,0,.05);
  }
}

</style>
