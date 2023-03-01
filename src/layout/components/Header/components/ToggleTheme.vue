<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import IconHoverContainer from '@/components/common/IconHoverContainer.vue'
import { computed } from 'vue'

const appStore = useAppStore()
const iconName = computed(() => appStore.base.themeMode === 'Dark' ? 'ic:baseline-mode-night' : 'ic:baseline-wb-sunny')
</script>

<template>
  <icon-hover-container>
    <svg-icon
        @click="appStore.setThemeMode(appStore.base.themeMode === 'Dark'?'Light': 'Dark')"
        :icon="iconName" />
  </icon-hover-container>
</template>

<style scoped>

</style>
