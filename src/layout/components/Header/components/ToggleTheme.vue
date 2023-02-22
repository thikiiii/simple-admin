<script lang="ts" setup>
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()
</script>

<template>
    <svg-icon @click="appStore.setThemeMode('Dark')" v-if="appStore.base.themeMode==='Light'" hover icon="ic:baseline-wb-sunny" />
    <svg-icon @click="appStore.setThemeMode('Light')" v-if="appStore.base.themeMode==='Dark'" hover icon="ic:baseline-mode-night" />
</template>

<style scoped>

</style>
