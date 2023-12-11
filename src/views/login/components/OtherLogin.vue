<script lang="ts" setup>
// 其他登录方式
const otherLoginMethods = [
    {
        icon: 'mdi:github',
        title: 'Github'
    },
    {
        icon: 'mdi:wechat',
        title: '微信'
    },
    {
        icon: 'ant-design:alipay-circle-filled',
        title: '支付宝'
    },
    {
        icon: 'ant-design:google-circle-filled',
        title: '谷歌'
    },
    {
        icon: 'mdi:twitter-circle',
        title: '推特'
    }
]
</script>

<template>
    <a-divider orientation="center">其他登录方式</a-divider>
    <flex-space block justify="space-around">
        <a-tooltip
                v-for="item in otherLoginMethods"
                :key="item.icon"
                :title="item.title"
                placement="bottom"
        >
            <svg-icon :icon="item.icon" pointer size="22" />
        </a-tooltip>
    </flex-space>
</template>

<style scoped>

</style>
