<script lang="ts" setup>


interface Props {
  // 标题
  heading?: string

  // 隐藏工具栏
  hideToolBar?: boolean

  // 隐藏头部
  hideHeader?: boolean
}


const props = withDefaults(defineProps<Props>(),{
})
console.log(props)
</script>

<template>
  <a-card>
    <div v-if="!hideHeader" class="baseTable-header">
      <h3 class="baseTable-header-title">{{ heading }}</h3>
    </div>
  </a-card>
</template>

<style lang="less" scoped>
.baseTable-header {
  margin-bottom: 17px;

  &-title {
    position: relative;
    display: inline-block;

    &::before {
      content: "";
      width: 80%;
      height: 5px;
      display: block;
      position: absolute;
      bottom: -5px;
      left: 0;
      background: @primary;
      border-radius: @radius-base;
    }
  }
}
</style>
