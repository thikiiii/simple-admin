<script lang="ts" setup>
</script>

<template>
  <a-dropdown trigger="hover">
    <flex-space class="cursor-pointer">
      <a-avatar :size="32" shape="square">Thik</a-avatar>
      <span>admin</span>
    </flex-space>
    <template #content>
      <a-doption>个人中心</a-doption>
      <a-doption>退出登录</a-doption>
    </template>
  </a-dropdown>

</template>

<style scoped>

</style>
