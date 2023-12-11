<script lang="ts" setup>
import OtherLogin from '@/views/login/components/OtherLogin.vue'
import { useLoginContext } from '@/views/login/hook/useLoginContext'
import { reactive, ref } from 'vue'
import useAuthStore from '@/store/modules/auth'
import { useToggle } from '@vueuse/core'
import type { FormInstance, Rule } from 'ant-design-vue/es/form'

const { setAction } = useLoginContext()
const authStore = useAuthStore()
const [ loading, toggleLoading ] = useToggle()

const formRef = ref<FormInstance>()

const form: UserApiRequest.PasswordLogin = reactive({
    username: 'admin',
    password: '123456'
})
const rules: Record<string, Rule[]> = {
    username: [
        {
            message: '请输入账号',
            required: true
        }
    ],
    password: [
        {
            message: '请输入密码',
            required: true
        }
    ]
}

const handleLogin = async () => {
    await formRef.value?.validate()
    toggleLoading(true)
    await authStore.passwordLogin(form).finally(() => toggleLoading(false)).catch(e => e)
}
</script>

<template>
    <flex-space block direction="vertical">
        <p class="login-title">登录</p>
        <a-form ref="formRef" :model="form" :rules="rules">
            <a-form-item name="username">
                <a-input v-model:value="form.username" placeholder="请输入账号" size="large" />
            </a-form-item>
            <a-form-item name="password">
                <a-input-password v-model:value="form.password" placeholder="请输入密码" size="large" />
            </a-form-item>
            <a-form-item>
                <flex-space block justify="space-between">
                    <a-checkbox>记住密码</a-checkbox>
                    <a-button type="link">忘记密码？</a-button>
                </flex-space>
            </a-form-item>
            <a-form-item>
                <a-button :loading="loading" block size="large" type="primary" @click="handleLogin">登录</a-button>
            </a-form-item>
        </a-form>
        <flex-space justify="space-between">
            <a-button block @click="setAction('PhoneLogin')">手机号登录</a-button>
            <a-button block @click="setAction('QrCodeLogin')">二维码登录</a-button>
            <a-button block @click="setAction('Registered')">注册</a-button>
        </flex-space>
        <other-login />
    </flex-space>
</template>

<style scoped>

</style>
