<template>
    <a-divider>
        主题颜色
    </a-divider>
    <flex-space justify="space-between">
        <div
                v-for="item in THEME_COLOR" :key="item" :style="{background:item}" class="themeCard"
                @click="setThemeColor(item)">
            <svg-icon v-if="appStore.base.themeColor===item" icon="ant-design:check-outlined" />
        </div>
    </flex-space>
</template>

<script lang="ts" setup>
import { initializeThemeCSSVariable, THEME_COLOR } from '@/store/modules/app/theme'
import useAppStore from '@/store/modules/app'
import { theme } from 'ant-design-vue'

const appStore = useAppStore()
const { token } = theme.useToken()
const setThemeColor = (color) => {
    appStore.setThemeColor(color)
    initializeThemeCSSVariable(token)
}
</script>

<style lang="less" scoped>
.themeCard {
  width: 20px;
  height: 20px;
  border-radius: @radius-small;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
