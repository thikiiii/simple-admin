<script lang="ts" setup>
interface Props {
  // 是否激活
  active?: boolean

  // 弹框文字内容
  popoverContent?: string
}

interface Emits {
  (e: 'clickCard'): void
}

defineOptions({ name: 'LayoutCard' })
defineProps<Props>()
const emits = defineEmits<Emits>()
</script>

<template>
  <a-popover position="bottom" trigger="hover">
    <div
        :class="active ? 'active' : undefined"
        class="layoutCard"
        @click="emits('clickCard')"
    >
      <slot />
    </div>
    <template #content>
      <span>{{ popoverContent }}</span>
    </template>
  </a-popover>
</template>

<style lang="less" scoped>
.layoutCard {
  background: @bg-secondary;
  height: 65px;
  width: 75px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 5px 5px 5px @shadow;
  transition: 0.2s ease-in-out;
  border: 3px solid @theme-shallow;
  padding: 3px;
  gap: 4px;

  &.active {
    box-shadow: 5px 5px 5px @theme-shallow;
    border-color: @theme-main;
  }
}
</style>
