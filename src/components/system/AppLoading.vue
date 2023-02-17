<script lang="ts" setup>
import useMetaEnv from '@/hooks/common/useMetaEnv'

const metaEnv = useMetaEnv()


</script>

<template>
  <div class="appLoading">
    <img alt="" class="appLoading-logo" src="../../assets/images/logo.png">
    <div class="appLoading-main">
      <div />
      <div />
    </div>
    <h1 class="appLoading-title">
      {{ metaEnv.VITE_GLOB_APP_TITLE }}
    </h1>
  </div>
</template>

<style lang="less" scoped>
.appLoading {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-logo {
    margin-bottom: 60px;
    height: 80px;
  }

  &-main {
    display: block;
    position: relative;
    width: 100px;
    height: 100px;
    animation: ball-spin-rotate 2s infinite linear;
    > div {
      position: absolute;
      top: 0;
      width: 60%;
      background: rgba(var(--primary-6));
      height: 60%;
      border-radius: 100%;
      animation: ball-spin-bounce 2s infinite ease-in-out;
    }

    > div:last-child {
      top: auto;
      bottom: 0;
      animation-delay: -1s;
    }
  }

  &-title {
    margin-top: 60px;
  }
}

@keyframes ball-spin-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes ball-spin-bounce {
  0%,
  100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}
</style>
