<template>
  <flex-space size="medium" direction="vertical">
    <p class="login-title">注册</p>
    <a-form>
      <a-form-item hide-label>
        <a-input placeholder="请输入账号" />
      </a-form-item>
      <a-form-item hide-label>
        <a-input placeholder="请输入手机号" />
      </a-form-item>
      <a-form-item hide-label>
        <flex-space style="width: 100%" direction="vertical">
        <a-input-password placeholder="请输入密码" />
          <a-progress :steps="5" status="danger" :percent="0.6" :show-text="false" />
        </flex-space>
      </a-form-item>
      <a-form-item hide-label>
        <a-input-password placeholder="请输入确定密码" />
      </a-form-item>
      <a-form-item hide-label>
          <a-input placeholder="请输入验证码" />
          <a-button style="margin-left: 10px">发送验证码</a-button>
      </a-form-item>
      <a-form-item hide-label>
        <flex-space justify="space-between">
          <a-checkbox>
            我同意
            <a-link>xxx隐私协议</a-link>
          </a-checkbox>
        </flex-space>
      </a-form-item>
      <a-form-item hide-label>
        <a-button size="large" long type="primary">注册</a-button>
      </a-form-item>
      <a-form-item hide-label>
        <a-button size="large" long @click="setAction('PasswordLogin')">返回</a-button>
      </a-form-item>
    </a-form>
  </flex-space>
</template>

<script lang="ts" setup>
import { useLoginContext } from '@/views/login/utils/useLoginContext'

const { setAction } = useLoginContext()
</script>

<style scoped>

</style>
