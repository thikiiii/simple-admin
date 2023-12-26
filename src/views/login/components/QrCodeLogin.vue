<script lang="ts" setup>
import { useLoginContext } from '@/views/login/hook/useLoginContext'

const { setAction } = useLoginContext()
</script>

<template>
  <a-flex align="center" gap="middle" vertical>
    <p class="login-title">二维码登录</p>
    <img
        alt=""
        height="250"
        src="../../../assets/images/login-qrCode.png"
        width="250"
    >
    <p class="text-secondary">扫码点击“确定”，即可完成登录</p>
    <a-button block @click="setAction('PasswordLogin')">返回</a-button>
  </a-flex>
</template>

<style scoped>

</style>
