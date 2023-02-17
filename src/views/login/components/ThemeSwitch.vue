<script lang="ts" setup>
import useLayoutStore from '@/store/modules/layout'
const layoutStore = useLayoutStore()
</script>

<template>
    <svg-icon
        v-if="layoutStore.app.isDark"
        @click="layoutStore.toggleDark()"
        pointer
        size="30"
        color="#4f60fc"
        icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" />
    <svg-icon @click="layoutStore.toggleDark()" v-else pointer size="30" color="#ffb948" icon="line-md:sunny-filled-loop" />
</template>

<style scoped>
p {
  color: #4f60fc;
}
</style>
