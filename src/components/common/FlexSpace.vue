<script lang="ts" setup>
interface Props {
    block?: boolean
    // 大小
    size?: 'mini' | 'small' | 'medium' | 'large'
    // 水平对齐
    justify?: 'space-between' | 'space-around' | 'space-evenly' | 'center' | 'flex-start' | 'flex-end'
    // 垂直对其
    align?: 'center' | 'flex-start' | 'flex-end'
    // 方向
    direction?: 'vertical' | 'horizontal'
    // 换行
    wrap?: boolean
}

withDefaults(defineProps<Props>(), {
    size: 'small',
    direction: 'horizontal',
    wrap: false,
    block: false
})


</script>

<template>
    <div
            :class="[size,direction]"
            :style="{justifyContent:justify,alignItems:align, flexWrap:wrap?'wrap':undefined,width:block?'100%':undefined}"
            class="flexSpace">
        <slot />
    </div>
</template>

<style lang="less" scoped>
.flexSpace {
  display: flex;

  &.mini {
    gap: 4px;
  }

  &.small {
    gap: 8px;
  }

  &.medium {
    gap: 16px;
  }

  &.large {
    gap: 24px;
  }

  &.vertical {
    flex-direction: column;
  }

  &.horizontal {
    flex-direction: row;
  }
}
</style>
