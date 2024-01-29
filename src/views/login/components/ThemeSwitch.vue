<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

const settingStore = useAppStore()
</script>

<template>
  <i-ic:baseline-mode-night
      @click="settingStore.setThemeMode('light')"
      v-if="settingStore.base.themeMode==='dark'"
      class="text-[#4f60fc] text-xl cursor-pointer" />
  <i-ic:baseline-wb-sunny
      v-else
      @click="settingStore.setThemeMode('dark')"
      class="text-[#ffb948] text-xl cursor-pointer"
  />
</template>

<style scoped>

</style>
