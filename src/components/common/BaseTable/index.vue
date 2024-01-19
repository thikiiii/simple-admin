<script lang="ts" setup>
import { BaseTableProps } from '@/components/common/BaseTable/type'

const props = withDefaults(defineProps<BaseTableProps>(),{})
console.log(props)
</script>

<template>
  <a-card>
    <div v-if="!hideHeader" class="h-[36px] mb-3 flex-y-center">
      <h3 class="inline-flex tracking-wider h-[36px] items-center gap-1">
        <span class="inline-block w-[5px] h-[60%] bg-primary rounded" />
        {{ heading }}
      </h3>
    </div>
    <a-table />
  </a-card>
</template>

<style lang="scss" scoped>
</style>

