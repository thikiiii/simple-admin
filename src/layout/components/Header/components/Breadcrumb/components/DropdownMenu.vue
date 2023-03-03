<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { BreadcrumbRoute } from '@arco-design/web-vue'

interface Props {
  menus: BreadcrumbRoute[]
}

defineProps<Props>()

const router = useRouter()
</script>

<template>
  <template v-for="item in menus" :key="item.path">
    <a-doption @click="router.push(item.path)" v-if="!item.children?.length">
      {{ item.label }}
    </a-doption>
    <a-dsubmenu class="submenu" v-else :value="item.path">
      <template #default>{{ item.label }}</template>
      <template #content>
        <dropdown-menu :menus="item.children" />
      </template>
    </a-dsubmenu>
  </template>
</template>

<style lang="less" scoped>
.submenu {
  :deep(.arco-breadcrumb-item-dropdown-icon) {
    color: @text-light !important;
  }
}
</style>
