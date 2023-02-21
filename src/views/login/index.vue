<template>
  <div class="w-full h-full overflow-hidden flex">
    <div class="w-[50%] flex-shrink-0 bg-theme-main flex justify-center items-center">
      <img class="w-[90%]" src="../../assets/images/login-coverPicture.png" alt="">
    </div>
    <div class="w-[50%] flex-shrink-0 relative flex flex-col justify-center items-center">
      <div class="flex gap-1 items-center absolute left-[15px] top-[15px]">
        <img width="90" src="../../assets/images/logo.png" alt="">
        <h1>Thik Admin</h1>
      </div>
      <theme-switch class="absolute right-[15px] top-[15px]" />
      <div class="w-[400px]">
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

<style scoped>

</style>
