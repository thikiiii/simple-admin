<script lang="ts" setup>
import IconHoverContainer from '@/layout/components/Header/components/IconHoverContainer.vue'
import ThemeMode from '@/layout/components/Header/components/Settings/components/ThemeMode.vue'
import { ref } from 'vue'

defineOptions({ name: 'Settings' })
const visible = ref(false)
</script>

<template>
  <icon-hover-container @click="visible=!visible">
    <svg-icon icon="ic:baseline-settings" />
  </icon-hover-container>
  <a-drawer :width="330" v-model:visible="visible" :footer="false" unmountOnClose>
    <template #title>系统配置</template>
    <theme-mode />
  </a-drawer>
</template>

<style scoped>

</style>
