<script setup lang="ts">
import useAppStore from '@/store/modules/app'
import useAuthStore from '@/store/modules/auth'
import { useRoute } from 'vue-router'

defineOptions({ name: 'MixMenu' })
const { footer } = useAppStore()
const authStore = useAuthStore()
const route = useRoute()
</script>

<template>
  <div class="mixMenu">
    <div class="mixMenu-list">
      <div
          v-for="item in authStore.routes"
          :key="item.path"
          :class="item.path === route.path?'active':undefined"
          class="mixMenu-list-item">
        <svg-icon pointer size="20" :icon="item?.meta?.icon" />
        <span class="mixMenu-list-item-text">{{ item?.meta?.title }}</span>
      </div>
    </div>
    <div class="mixMenu-footer" :style="{height:`${footer.height}px`}">
      <svg-icon size="20" icon="ant-design:double-left-outlined" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.mixMenu {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
  &-list{
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 7px;
    &-item{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 7px;
      gap: 7px;
      transition: .2s;
      border-radius: 7px;
      cursor: pointer;
      &:hover:not(.active){
        background: @full-deep;
      }
      &.active{
        background: @theme-shallow;
        color: @theme-main;
      }
      &-text{
        white-space: nowrap;
      }
    }
  }
  &-footer{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s;
    cursor: pointer;
    border-radius: 7px;
    &:hover{
      background: @full-deep;
    }
  }
}
</style>
