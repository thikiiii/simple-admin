<script setup lang="ts">
import useAppStore from '@/store/modules/app'
import useAuthStore from '@/store/modules/auth'
import { useRoute } from 'vue-router'

defineOptions({ name: 'MixMenu' })
const { footer } = useAppStore()
const authStore = useAuthStore()
const route = useRoute()
</script>

<template>
  <div class="w-full h-full overflow-hidden flex flex-col items-center p-1">
    <div class="w-full h-full overflow-auto flex flex-1 gap-1 flex-col">
      <div
          v-for="item in authStore.routes"
          :key="item.path"
          :class="item.path === route.path?'bg-theme-hoverShallow hover:bg-theme-hoverShallow':undefined"
          class="w-full flex flex-col justify-center items-center p-[10px] gap-1 hover:bg-hover-shallow rounded-medium cursor-pointer">
        <svg-icon pointer size="20" :icon="item?.meta?.icon" />
        <span class="whitespace-nowrap">{{ item?.meta?.title }}</span>
      </div>
    </div>
    <div
        class="w-full flex items-center justify-center hover:bg-hover-shallow cursor-pointer rounded-medium"
        :style="{height:`${footer.height}px`}">
      <svg-icon size="20" icon="ant-design:double-left-outlined" />
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>
