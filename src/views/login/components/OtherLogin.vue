<script lang="ts" setup>
// 其他登录方式
const otherLoginMethods = [
  {
    icon: 'ant-design:github-filled',
    title: 'Github'
  },
  {
    icon: 'ant-design:wechat-filled',
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
    icon: 'ant-design:twitter-circle-filled',
    title: '推特'
  }
]
</script>

<template>
  <a-divider orientation="center">其他登录方式</a-divider>
  <a-flex gap="middle" justify="space-around">
    <a-tooltip
        v-for="item in otherLoginMethods"
        :key="item.icon"
        :title="item.title"
        placement="bottom"
    >
      <svg-icon :icon="item.icon" pointer size="22" />
    </a-tooltip>
  </a-flex>
</template>

<style scoped>

</style>
