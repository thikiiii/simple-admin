<script lang="ts" setup>
import ContextMenu from '@/layout/components/Header/components/Settings/components/ContextMenu.vue'
import useAppStore from '@/store/modules/app'

const appStore = useAppStore()

const componentSize = [
    {
        label: 'small',
        value: 'small'
    },
    {
        label: 'medium',
        value: 'medium'
    },
    {
        label: 'large',
        value: 'large'
    }
]

const { antdConfig } = appStore
</script>

<template>
    <a-divider>
        Antd 组件库配置
    </a-divider>
    <flex-space direction="vertical">
        <context-menu label="组件尺寸">
            <a-select style="width: 120px" v-model:value="antdConfig.size">
                <a-select-option v-for="item in componentSize" :key="item.value" :value="item.value">{{ item.label }}
                </a-select-option>
            </a-select>
        </context-menu>
    </flex-space>
</template>

<style scoped>

</style>
