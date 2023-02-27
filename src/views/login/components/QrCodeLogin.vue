<script lang="ts" setup>
import { useLoginContext } from '@/views/login/utils/useLoginContext'

const { setAction } = useLoginContext()
</script>

<template>
  <flex-space size="large" direction="vertical">
    <p class="login-title">二维码登录</p>
    <img
        alt=""
        height="250"
        src="../../../assets/images/login-qrCode.png"
        width="250"
    >
    <p class="text-secondary">扫码点击“确定”，即可完成登录</p>
    <a-button long @click="setAction('PasswordLogin')">返回</a-button>
  </flex-space>
</template>

<style scoped>

</style>
