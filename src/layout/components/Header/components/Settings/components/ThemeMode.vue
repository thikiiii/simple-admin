<script lang="ts" setup>
import ConfigMenu from '@/layout/components/Header/components/Settings/components/ContextMenu.vue'
import useAppStore from '@/store/modules/app'
import { ref, watch } from 'vue'

const appStore = useAppStore()
const isDark = ref(appStore.base.themeMode === 'dark')

const onUpdate = (value) => appStore.setThemeMode(value ? 'dark' : 'light')

watch(() => appStore.base.themeMode, () => {
    isDark.value = appStore.base.themeMode === 'dark'
})
</script>

<template>
  <a-divider>
    主题模式
  </a-divider>
  <flex-space size="large" direction="vertical">
    <config-menu label="深色主题">
      <a-switch @update:model-value="onUpdate" v-model="isDark" checked-color="#464e62" unchecked-color="#464e62">
        <template #checked>
          <svg-icon size="16" color="#4f60fc" icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" />
        </template>
        <template #unchecked>
          <svg-icon size="16" color="#ffb948" icon="line-md:sunny-filled-loop" />
        </template>
      </a-switch>
    </config-menu>
    <config-menu label="跟随系统">
      <a-switch v-model="appStore.base.themeModeFollowSystem" checked-color="#464e62" unchecked-color="#464e62">
        <template #checked>
          <svg-icon size="16" icon="ic:round-hdr-auto" />
        </template>
        <template #unchecked>
          <svg-icon size="16" icon="ic:baseline-do-disturb-on" />
        </template>
      </a-switch>
    </config-menu>
  </flex-space>
</template>

<style lang="less" scoped>

</style>
