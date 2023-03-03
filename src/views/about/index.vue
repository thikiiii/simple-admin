<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

defineOptions({ name: 'About' })
const appStore = useAppStore()
</script>

<template>
<div style="background: red">
  <a-button @click="appStore.base.layoutMode='mix-side'">Mix</a-button>
  <a-button @click="appStore.base.layoutMode='side'">side</a-button>
  <a-button @click="appStore.base.layoutMode='top'">Top</a-button>
  <br>
  <a-button @click="appStore.base.layoutStyle='side-dark'">side-dark</a-button>
  <a-button @click="appStore.base.layoutStyle='side-top-dark'">side-top-dark</a-button>
  <a-button @click="appStore.base.layoutStyle='side-top-light'">side-top-light</a-button>
</div>
</template>

<style scoped>

</style>
