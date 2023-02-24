<script setup lang="ts">
import Logo from '@/layout/components/Logo.vue'
import Menu from '@/layout/components/Menu/index.vue'
import useAppStore from '@/store/modules/app'
import gsap from 'gsap'
import { ref, watch } from 'vue'

defineOptions({ name: 'LayoutSidebar' })

const { sidebar } = useAppStore()

const sidebarEl = ref()

watch(()=>sidebar.isCollapsed, () => {
    gsap.to(sidebarEl.value,{
        width: sidebar.isCollapsed ? '500px' : '200px',
        duration: 0.2
    })
})
</script>

<template>
  <div ref="sidebarEl" class="bg-container flex flex-col items-center ">
    <logo />
    <Menu :collapsed="sidebar.isCollapsed" />
  </div>
</template>

<style scoped>

</style>
