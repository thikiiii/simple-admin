<script lang="ts" setup>
</script>

<template>
  <a-form>
    <a-form-item hide-label>
      <a-input placeholder="请输入手机号" />
    </a-form-item>
    <a-form-item hide-label>
      <flex-space justify="space-between">
      <a-input placeholder="请输入验证码" />
        <a-button>发送验证码</a-button>
      </flex-space>
    </a-form-item>
    <a-form-item hide-label>
      <a-button size="large" long type="primary">登录</a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>
