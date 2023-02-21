<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
  <icon-sun-fill v-if="appStore.base.themeMode==='Light'" @click="appStore.setThemeMode('Dark')" class="cursor-pointer" />
  <icon-moon-fill v-if="appStore.base.themeMode==='Dark'" @click="appStore.setThemeMode('Light')" />
</template>

<style scoped>

</style>
