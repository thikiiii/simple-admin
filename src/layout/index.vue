<script lang="ts" setup>
import LayoutHeader from '@/layout/components/Header/index.vue'
import LayoutSidebar from '@/layout/components/Sidebar/index.vue'
import LayoutMain from '@/layout/components/Main/index.vue'
import TabBar from '@/layout/components/TabBar/index.vue'

defineOptions({ name: 'Layout' })

</script>

<template>
  <div class="layout ">
    <layout-sidebar />
    <div class="layout-container">
      <layout-header />
      <tab-bar />
      <layout-main />
      <div class="h-[34px] bg-container">footer</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout{
  width: 100vw;
  height: 100vh;
  background: @bg-main;
  display: flex;
  &-container{
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
