<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import IconHoverContainer from '@/layout/components/Header/components/IconHoverContainer.vue'
import { computed } from 'vue'

const appStore = useAppStore()
const iconComponent = computed(() => appStore.base.themeMode === 'dark' ? IIcBaselineModeNight : IIcBaselineWbSunny)
</script>

<template>
  <icon-hover-container @click="appStore.setThemeMode(appStore.base.themeMode === 'dark'?'light': 'dark')">
    <component :is="iconComponent" />
  </icon-hover-container>
</template>

<style scoped>

</style>
