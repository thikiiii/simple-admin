<script lang="ts" setup>
import OtherLogin from '@/views/login/components/OtherLogin.vue'
import { useLoginContext } from '@/views/login/utils/useLoginContext'

const { setAction } = useLoginContext()
</script>

<template>
  <flex-space size="medium" direction="vertical">
    <h1 class="text-base text-3xl ">登录</h1>
    <a-form>
      <a-form-item hide-label>
        <a-input placeholder="用户名" />
      </a-form-item>
      <a-form-item hide-label>
        <a-input-password placeholder="密码" />
      </a-form-item>
      <a-form-item hide-label>
        <a-row class="w-full" justify="space-between" align="center">
          <a-col :span="5">
            <a-checkbox>记住密码</a-checkbox>
          </a-col>
          <a-col :span="5">
            <a-link>忘记密码？</a-link>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item hide-label>
        <a-button size="large" long type="primary">登录</a-button>
      </a-form-item>
    </a-form>
    <flex-space justify="space-around">
      <a-button @click="setAction('PhoneLogin')">手机号登录</a-button>
      <a-button @click="setAction('QrCodeLogin')">二维码登录</a-button>
      <a-button @click="setAction('Registered')">注册</a-button>
    </flex-space>
    <other-login />
  </flex-space>
</template>

<style scoped>

</style>
