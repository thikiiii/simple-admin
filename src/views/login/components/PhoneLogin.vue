<script lang="ts" setup>
import { useLoginContext } from '@/views/login/utils/useLoginContext'

const { setAction } = useLoginContext()
</script>

<template>
  <flex-space direction="vertical">
    <p class="login-title">手机号登录</p>
    <a-form>
      <a-form-item hide-label>
        <a-input size="large" placeholder="请输入手机号" />
      </a-form-item>
      <a-form-item hide-label>
        <flex-space block justify="space-between">
          <a-input size="large" placeholder="请输入验证码" />
          <a-button size="large">发送验证码</a-button>
        </flex-space>
      </a-form-item>
      <a-form-item hide-label>
        <a-button size="large" long type="primary">登录</a-button>
      </a-form-item>
      <a-form-item hide-label>
        <a-button size="large" long @click="setAction('PasswordLogin')">返回</a-button>
      </a-form-item>
    </a-form>
  </flex-space>
</template>

<style scoped>

</style>
