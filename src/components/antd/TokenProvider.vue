<template />
<script lang="ts" setup>
// 用与提供 antd token, 在 config-provider 中获取不到最新的 token
import { watch } from 'vue'
import { theme } from 'ant-design-vue'
import useAppStore from '@/store/modules/app'

const { token } = theme.useToken()
const appStore = useAppStore()

watch(() => appStore.base.themeMode, () => {
  appStore.mapAntdThemeToCSSVariable(token)
}, { immediate: true })
</script>

<style lang="less" scoped>

</style>
