<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

const settingStore = useAppStore()
</script>

<template>
  <svg-icon
      v-if="settingStore.base.themeMode==='dark'"
      @click="settingStore.setThemeMode('light')"
      pointer
      size="26"
      color="#4f60fc"
      local-icon="night" />
  <svg-icon
      v-else
      @click="settingStore.setThemeMode('dark')"
      pointer
      size="26"
      color="#ffb948"
      local-icon="sunny" />
</template>

<style scoped>

</style>
