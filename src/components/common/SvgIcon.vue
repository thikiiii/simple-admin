<template>
  <div class="svg-icon" :class="hover?'hover':undefined">
    <!-- iconify 图标 -->
    <icon class="arco-icon" v-if="!localIcon" :icon="iconName" :style="style" />
    <!-- 本地图标 -->
    <svg
        v-else
        :height="size"
        :style="{ cursor: pointer ? 'pointer' : undefined, color }"
        :width="size"
        aria-hidden="true"
        class="arco-icon"
    >
      <use :xlink:href="iconName" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import useMetaEnv from '@/hooks/common/useMetaEnv'
import { isNumber } from 'lodash-es'

export interface IconProps {
  // 图标地址：https://icones.js.org/collection/all
  // 图标名称 例如：mdi:account | mdi-account
  icon?: string

  // 本地图标
  localIcon?: string

  // 颜色
  color?: string

  // 大小
  size?: string | number

  // 指针
  pointer?: boolean

  // 悬浮
  hover?: boolean
}

defineOptions({ name: 'Icon' })
const props = defineProps<IconProps>()

const metaEnv = useMetaEnv()
const iconName = computed(() => props.localIcon ? `#${ metaEnv.VITE_ICON_LOCAL_PREFIX }-${ props.localIcon }` : props.icon)
const style = computed(() => ({
    cursor: props.pointer ? 'pointer' : undefined,
    color: props.color,
    width: isNumber(props.size) ? `${ props.size }px` : props.size,
    height: isNumber(props.size) ? `${ props.size }px` : props.size,
    stroke: 'none'
}))
</script>

<style lang="less" scoped>
.svg-icon{
  display: inline-block;
  &.hover{
    border-radius: 7px;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s;
    cursor: pointer;
    &:hover{
      background: @full-deep;
    }
  }
}
</style>
