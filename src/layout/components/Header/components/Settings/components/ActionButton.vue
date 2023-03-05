<script setup lang="ts">
import useAppStore from '@/store/modules/app'
import { useClipboard, useToggle } from '@vueuse/core'
import { initialAppStore } from '@/store/modules/app/initial'
import { cloneDeep } from 'lodash-es'
const appStore = useAppStore()
const clipboard = useClipboard()
const [ visible,toggleVisible ] = useToggle()

const copyCurrentConfig = () => {
    clipboard.copy(JSON.stringify(appStore.$state, null, 4))
    toggleVisible(true)
}

const resetCurrentConfig = () => {
    appStore.$patch(cloneDeep(initialAppStore))
}
</script>

<template>
  <flex-space size="medium" direction="vertical">
    <a-button long type="primary" @click="copyCurrentConfig">拷贝当前配置</a-button>
    <a-button long status="warning" type="primary" @click="resetCurrentConfig">重置当前配置</a-button>
  </flex-space>
  <a-modal title-align="start" hide-cancel v-model:visible="visible">
    <template #title>提示</template>
    复制成功，请到 <a-link>src/store/modules/app/initial.ts</a-link> 文件中,覆盖 <a-link>initialAppStore</a-link> 对象
  </a-modal>
</template>

<style lang="less" scoped>

</style>
