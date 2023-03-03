<script lang="ts" setup>
import ContextMenu from '@/layout/components/Header/components/Settings/components/ContextMenu.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
const { footer } = appStore
</script>

<template>
  <a-divider>底部</a-divider>
  <flex-space direction="vertical">
    <context-menu label="显示底部">
      <a-switch v-model="footer.visible" />
    </context-menu>
    <context-menu label="底部高度">
      <a-input-number mode="button" v-model="footer.height" :step="10" />
    </context-menu>
    <context-menu label="固定底部">
      <a-switch v-model="footer.isFixed" />
    </context-menu>
  </flex-space>
</template>

<style scoped>

</style>
