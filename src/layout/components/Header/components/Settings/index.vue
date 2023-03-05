<script lang="ts" setup>
import IconHoverContainer from '@/layout/components/Header/components/IconHoverContainer.vue'
import ThemeMode from '@/layout/components/Header/components/Settings/components/ThemeMode.vue'
import { ref } from 'vue'
import LayoutMode from '@/layout/components/Header/components/Settings/components/LayoutMode.vue'
import LayoutStyle from '@/layout/components/Header/components/Settings/components/LayoutStyle.vue'
import SidebarConfig from '@/layout/components/Header/components/Settings/components/SidebarConfig.vue'
import HeaderConfig from '@/layout/components/Header/components/Settings/components/HeaderConfig.vue'
import FooterConfig from '@/layout/components/Header/components/Settings/components/FooterConfig.vue'
import ArcoConfig from '@/layout/components/Header/components/Settings/components/ArcoConfig.vue'
import OtherConfig from '@/layout/components/Header/components/Settings/components/OtherConfig.vue'
import ActionButton from '@/layout/components/Header/components/Settings/components/ActionButton.vue'

defineOptions({ name: 'Settings' })
const visible = ref(false)
</script>

<template>
  <icon-hover-container @click="visible=!visible">
    <svg-icon icon="ic:baseline-settings"/>
  </icon-hover-container>
  <a-drawer :width="330" v-model:visible="visible"  unmountOnClose>
    <template #title>系统配置</template>
    <theme-mode/>
    <layout-mode/>
    <layout-style/>
    <sidebar-config/>
    <header-config/>
    <footer-config/>
    <arco-config/>
    <other-config/>
    <template #footer>
      <action-button/>
    </template>
  </a-drawer>
</template>

<style lang="less" scoped>

</style>
