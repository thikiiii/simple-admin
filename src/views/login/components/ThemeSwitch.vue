<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
const settingStore = useAppStore()
</script>

<template>
    <svg-icon
        v-if="settingStore.base.themeMode==='dark'"
        @click="settingStore.setThemeMode('light')"
        pointer
        size="30"
        color="#4f60fc"
        icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" />
    <svg-icon @click="settingStore.setThemeMode('dark')" v-else pointer size="30" color="#ffb948" icon="line-md:sunny-filled-loop" />
</template>

<style scoped>
p {
  color: #4f60fc;
}
</style>
