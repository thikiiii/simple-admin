<template>
    <flex-space direction="vertical" size="medium">
        <p class="login-title">注册</p>
        <a-form :model="form">
            <a-form-item>
                <a-input placeholder="请输入账号" />
            </a-form-item>
            <a-form-item>
                <a-input placeholder="请输入手机号" />
            </a-form-item>
            <a-form-item>
                <flex-space direction="vertical" style="width: 100%">
                    <a-input-password placeholder="请输入密码" />
                </flex-space>
            </a-form-item>
            <a-form-item>
                <a-input-password placeholder="请输入确定密码" />
            </a-form-item>
            <a-form-item>
                <flex-space block justify="space-between">
                    <a-input placeholder="请输入验证码" size="large" />
                    <a-button size="large">发送验证码</a-button>
                </flex-space>
            </a-form-item>
            <a-form-item>
                <flex-space justify="space-between">
                    <a-checkbox>
                        我同意
                        <a-button type="link">xxx隐私协议</a-button>
                    </a-checkbox>
                </flex-space>
            </a-form-item>
            <a-form-item>
                <a-button block size="large" type="primary">注册</a-button>
            </a-form-item>
            <a-form-item>
                <a-button block size="large" @click="setAction('PasswordLogin')">返回</a-button>
            </a-form-item>
        </a-form>
    </flex-space>
</template>

<script lang="ts" setup>
import { useLoginContext } from '@/views/login/hook/useLoginContext'

const { setAction } = useLoginContext()
const form = {}

</script>

<style scoped>

</style>
