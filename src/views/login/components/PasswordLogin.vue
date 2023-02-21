<script lang="ts" setup>
import OtherLogin from '@/views/login/components/OtherLogin.vue'
import { useLoginContext } from '@/views/login/utils/useLoginContext'

const { setAction } = useLoginContext()
</script>

<template>
  <flex-space size="medium" direction="vertical">
    <h1 class="text-title  text-left w-full">登录</h1>
    <a-form>
      <a-form-item hide-label>
        <a-input placeholder="请输入账号" />
      </a-form-item>
      <a-form-item hide-label>
        <a-input-password placeholder="请输入密码" />
      </a-form-item>
      <a-form-item hide-label>
        <flex-space block justify="space-between">
          <a-checkbox>记住密码</a-checkbox>
          <a-link>忘记密码？</a-link>
        </flex-space>
      </a-form-item>
      <a-form-item hide-label>
        <a-button size="large" long type="primary">登录</a-button>
      </a-form-item>
    </a-form>
    <flex-space block justify="space-around">
      <a-button long @click="setAction('PhoneLogin')">手机号登录</a-button>
      <a-button long @click="setAction('QrCodeLogin')">二维码登录</a-button>
      <a-button long @click="setAction('Registered')">注册</a-button>
    </flex-space>
    <other-login />
  </flex-space>
</template>

<style scoped>

</style>
