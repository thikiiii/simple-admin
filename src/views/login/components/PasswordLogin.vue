<script lang="ts" setup>
import OtherLogin from '@/views/login/components/OtherLogin.vue'
import { useLoginContext } from '@/views/login/utils/useLoginContext'
import { reactive } from 'vue'
import { FieldRule } from '@arco-design/web-vue'
import useAuthStore from '@/store/modules/auth'
import { useToggle } from '@vueuse/core'

const { setAction } = useLoginContext()
const authStore = useAuthStore()
const [ loading, toggleLoading ] = useToggle()
const form: UserApiRequest.PasswordLogin = reactive({
    username: 'admin',
    password: '123456'
})
const rules: Record<string, FieldRule[]> = reactive({
    username: [
        {
            type: 'string',
            message: '请输入账号',
            required: true
        }
    ],
    password: [
        {
            type: 'string',
            message: '请输入密码',
            required: true
        }
    ]
})

const handleLogin = async({ values, errors }) => {
    if (errors) return
    toggleLoading(true)
    await authStore.passwordLogin(values).finally(()=>toggleLoading(false))
}
</script>

<template>
  <flex-space size="medium" direction="vertical">
    <h1 class="text-title  text-left w-full">登录</h1>
    <a-form @submit="handleLogin" :rules="rules" :model="form">
      <a-form-item field="username" hide-label>
        <a-input v-model="form.username" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="password" hide-label>
        <a-input-password v-model="form.password" placeholder="请输入密码" />
      </a-form-item>
      <a-form-item hide-label>
        <flex-space block justify="space-between">
          <a-checkbox>记住密码</a-checkbox>
          <a-link>忘记密码？</a-link>
        </flex-space>
      </a-form-item>
      <a-form-item hide-label>
        <a-button :loading="loading" html-type="submit" size="large" long type="primary">登录</a-button>
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
