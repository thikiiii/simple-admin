<template>
  <div class="w-full h-full overflow-auto flex">
    <div class="flex-1 flex-shrink-0 bg-theme-main flex justify-center items-center">
      <img class="w-[90%]" src="../../assets/images/login-coverPicture.png" alt="">
    </div>
    <div class="flex-1 flex-shrink-0 relative p-[20%]">
      <div class="absolute right-[15px] top-[15px]">
        <theme-switch />
      </div>
      <a-space>
        <a-button @click="test" type="primary">
          <template #icon>
            <svg-icon icon="ic:baseline-adb" />
          </template>
        </a-button>
        <a-button @click="test" type="primary">
          <template #icon>
            <icon-plus />
          </template>
          测试
        </a-button>
        <a-button>test</a-button>
      </a-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'
import ThemeSwitch from '@/views/login/components/themeSwitch.vue'
import { IconPlus } from '@arco-design/web-vue/es/icon'
defineOptions({ name: 'Login' })
// 设置为暗黑主题

const test = () => {
    Message.success('成功')
}
</script>

<style scoped>

</style>
