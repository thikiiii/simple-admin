<script setup lang="ts">
import useAppStore from '@/store/modules/app'
import ContextMenu from '@/layout/components/Header/components/Settings/components/ContextMenu.vue'
defineOptions({ name: '' })
const appStore = useAppStore()

const animationList = [
    {
        label: '缩放淡入淡出',
        value: 'zoom-fade'
    },
    {
        label: '左滑动淡入淡出',
        value: 'left-slide-fade'
    },
    {
        label: '右滑动淡入淡出',
        value: 'right-slide-fade'
    }
]

const { base } = appStore
</script>

<template>
  <a-divider>其他</a-divider>
  <flex-space direction="vertical">
    <context-menu label="开启页面切换动画">
      <a-switch v-model="base.isPageStartAnimation" />
    </context-menu>
    <context-menu label="组件尺寸">
      <a-select v-model="base.pageAnimationMode">
        <a-option v-for="item in animationList" :key="item.value">{{ item.value }}</a-option>
      </a-select>
    </context-menu>
  </flex-space>
</template>

<style scoped>

</style>
