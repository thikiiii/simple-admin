<script setup lang="ts">
import { useGlobalInitialize } from '@/hooks/effect/useGlobalInitialize'
import { useGlobalEvents } from '@/hooks/effect/useGlobalEvents'
import { useGlobalSubscribe } from '@/store/subscribe'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()

// 全局初始化
useGlobalInitialize()

// 全局事件
useGlobalEvents()

// 全局订阅
useGlobalSubscribe()
</script>

<template>
  <a-config-provider  :size="appStore.arco.size">
    <router-view />
  </a-config-provider>
</template>
