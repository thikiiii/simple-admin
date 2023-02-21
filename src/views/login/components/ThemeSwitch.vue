<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
const settingStore = useAppStore()
</script>

<template>
    <svg-icon
        v-if="settingStore.base.themeMode==='Dark'"
        @click="settingStore.setThemeMode('Light')"
        pointer
        size="30"
        color="#4f60fc"
        icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" />
    <svg-icon @click="settingStore.setThemeMode('Dark')" v-else pointer size="30" color="#ffb948" icon="line-md:sunny-filled-loop" />
</template>

<style scoped>
p {
  color: #4f60fc;
}
</style>
