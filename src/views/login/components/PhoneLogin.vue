<script lang="ts" setup>
import { useLoginContext } from '@/views/login/hook/useLoginContext'

const { setAction } = useLoginContext()
const form = {}
</script>

<template>
  <a-flex gap="middle" vertical>
    <p class="login-title">手机号登录</p>
    <a-form :model="form">
      <a-form-item>
        <a-input placeholder="请输入手机号" size="large" />
      </a-form-item>
      <a-form-item>
        <a-flex gap="middle" justify="space-between">
          <a-input placeholder="请输入验证码" size="large" />
          <a-button size="large">发送验证码</a-button>
        </a-flex>
      </a-form-item>
      <a-form-item>
        <a-button block size="large" type="primary">登录</a-button>
      </a-form-item>
      <a-form-item>
        <a-button block size="large" @click="setAction('PasswordLogin')">返回</a-button>
      </a-form-item>
    </a-form>
  </a-flex>
</template>

<style scoped>

</style>
