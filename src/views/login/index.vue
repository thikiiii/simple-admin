<template>
  <div class="login">
    <div class="login-cover">
      <img src="../../assets/images/login-coverPicture.png" alt="">
    </div>
    <div class="login-main">
      <div class="login-main-logo ">
        <img width="90" src="../../assets/images/logo.png" alt="">
        <h1>Thik Admin</h1>
      </div>
      <theme-switch class="login-main-theme" />
      <div class="login-main-form">
        <transition mode="out-in" :name="settingStore.base.pageAnimationMode">
          <qr-code-login v-if="currentAction==='QrCodeLogin'" />
          <password-login v-else-if="currentAction==='PasswordLogin'" />
          <phone-login v-else-if="currentAction==='PhoneLogin'" />
          <register v-else-if="currentAction==='Registered'" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThemeSwitch from '@/views/login/components/ThemeSwitch.vue'
import PasswordLogin from '@/views/login/components/PasswordLogin.vue'
import QrCodeLogin from '@/views/login/components/QrCodeLogin.vue'
import PhoneLogin from '@/views/login/components/PhoneLogin.vue'
import { useLoginContext } from '@/views/login/utils/useLoginContext'
import Register from '@/views/login/components/Register.vue'
import useAppStore from '@/store/modules/app'

defineOptions({ name: 'Login' })

const { currentAction } = useLoginContext()
const settingStore = useAppStore()
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  background: @bg-secondary;

  &-cover {
    width: 50%;
    flex-shrink: 0;
    display: flex;
    background: @theme-main;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
    }
  }

  &-main {
    width: 50%;
    flex-shrink: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-logo {
      display: flex;
      position: absolute;
      left: 15px;
      top: 15px;
      align-items: center;
      gap: 10px;
    }

    &-form {
      width: 400px;
      position: relative;
    }

    &-theme {
      position: absolute;
      right: 15px;
      top: 15px;
    }
  }
}
</style>

<style lang="less">
.login-title {
  width: 100%;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
}
</style>
