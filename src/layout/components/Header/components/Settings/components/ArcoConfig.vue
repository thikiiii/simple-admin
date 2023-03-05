<script setup lang="ts">
import ContextMenu from '@/layout/components/Header/components/Settings/components/ContextMenu.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()

const componentSize = [
    {
        label: 'mini',
        value: 'mini'
    },
    {
        label: 'small',
        value: 'small'
    },
    {
        label: 'medium',
        value: 'medium'
    },
    {
        label: 'large',
        value: 'large'
    }
]

const { arco } = appStore
</script>

<template>
  <a-divider>
    Arco
  </a-divider>
  <flex-space direction="vertical">
    <context-menu label="组件尺寸">
      <a-select v-model="arco.size" >
        <a-option v-for="item in componentSize" :key="item.value">{{ item.value }}</a-option>
      </a-select>
    </context-menu>
  </flex-space>
</template>

<style scoped>

</style>
