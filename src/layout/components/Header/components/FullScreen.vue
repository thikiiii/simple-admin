<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, enter, exit } = useFullscreen()
</script>

<template>
  <svg-icon hover @click="enter" v-if="!isFullscreen" icon="ant-design:expand-outlined" />
  <svg-icon hover @click="exit" v-else icon="ant-design:compress-outlined" />
</template>
