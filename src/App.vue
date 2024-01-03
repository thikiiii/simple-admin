<script lang="ts" setup>
import { useGlobalInitialize } from '@/hooks/effect/useGlobalInitialize'
import { useGlobalEvents } from '@/hooks/effect/useGlobalEvents'
import { useGlobalSubscribe } from '@/store/subscribe'
import useAppStore from '@/store/modules/app'
import { computed } from 'vue'
import { theme } from 'ant-design-vue'

const appStore = useAppStore()

// 全局初始化
useGlobalInitialize()

// 全局事件
useGlobalEvents()

// 全局订阅
useGlobalSubscribe()

const themeConfig = computed(() => {
  return {
    token: { colorPrimary: appStore.base.themeColor },
    algorithm: appStore.base.themeMode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
  }
})
</script>

<template>
  <a-config-provider
      :auto-insert-space-in-button="appStore.antdConfig.autoInsertSpaceInButton"
      :component-size="appStore.antdConfig.size"
      :theme="themeConfig"
  >
    <a-app>
      <router-view />
    </a-app>
    <token-provider />
  </a-config-provider>
</template>
