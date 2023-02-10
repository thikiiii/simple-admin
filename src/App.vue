<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'

const test = () => {
    ConfigProvider.config({ theme: { primaryColor: '#312123' } })
}
</script>

<template>
    <a-config-provider>
    <a-button @click="test" type="primary">测试</a-button>
    </a-config-provider>
</template>

<style lang="less" scoped>
.test{
  width: 300px;
  height: 300px;
}
</style>
