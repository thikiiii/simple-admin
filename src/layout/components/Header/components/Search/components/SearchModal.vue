<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import SearchItem from '@/layout/components/Header/components/Search/components/SearchItem.vue'

interface Props {
  // 可见
  visible: boolean
}

interface Emits {
  (e: 'update:visible', isShow: boolean): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const visible = useVModel(props,'visible',emits)
</script>

<template>
  <a-modal width="630px" simple title-align="start" v-model:visible="visible" :align-center="false" :footer="false">
    <template #title>
      <a-input-search placeholder="请输入你想搜索的菜单" />
    </template>
    <div class="w-full max-h-[500px] overflow-auto">
      <search-item />
    </div>
  </a-modal>
</template>

<style scoped>

</style>
