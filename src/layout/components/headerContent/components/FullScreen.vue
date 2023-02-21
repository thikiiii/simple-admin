<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, enter, exit } = useFullscreen()
</script>

<template>
  <icon-fullscreen @click="enter" v-if="!isFullscreen" />
  <icon-fullscreen-exit @click="exit" v-else />
</template>
