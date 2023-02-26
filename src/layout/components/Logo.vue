<script setup lang="ts">
import useAppStore from '@/store/modules/app'
import { computed } from 'vue'

const appStore = useAppStore()
const isHide = computed(()=>appStore.sidebar.isCollapsed || appStore.base.layoutMode === 'MixSide')
</script>

<template>
  <div class="flex items-center justify-center gap-1 h-[56px] ">
    <img height="28" src="../../assets/images/logo.png" alt="">
    <span v-if="!isHide" class="font-bold text-[18px] whitespace-nowrap">Thik Admin</span>
  </div>
</template>

<style scoped>

</style>
