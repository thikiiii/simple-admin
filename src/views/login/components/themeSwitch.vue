<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
  <transition name="el-zoom-in-center" mode="in-out">
    <svg-icon
        v-if="isDark"
        @click="toggleDark()"
        pointer
        size="30"
        color="#4f60fc"
        icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" />
    <svg-icon @click="toggleDark()" v-else pointer size="30" color="#ffb948" icon="line-md:sunny-filled-loop" />
  </transition>
</template>

<style scoped>
p {
  color: #4f60fc;
}
</style>
