<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

defineOptions({ name: 'About' })
const appStore = useAppStore()
</script>

<template>
<div>
  <a-button @click="appStore.base.layoutMode='MixSide'">Mix</a-button>
  <a-button @click="appStore.base.layoutMode='Side'">Side</a-button>
  <a-button @click="appStore.base.layoutMode='Top'">Top</a-button>
</div>
</template>

<style scoped>

</style>
