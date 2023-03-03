<script lang="ts" setup>
import { RouteLocationMatched, useRouter } from 'vue-router'

interface Props {
  routes:RouteLocationMatched[]
}

defineProps<Props>()

const router = useRouter()
</script>

<template>
  <template v-for="item in routes" :key="item.path">
    <a-doption @click="router.push(item.path)" v-if="!item.children?.length">
      {{ item.meta?.title }}
    </a-doption>
    <a-dsubmenu class="submenu" v-else :value="item.path">
      <template #default>{{ item.meta?.title }}</template>
      <template #content>
        <dropdown-menu :routes="item.children" />
      </template>
    </a-dsubmenu>
  </template>
</template>

<style lang="less" scoped>
.submenu{
  :deep(.arco-breadcrumb-item-dropdown-icon) {
    color: @text-light!important;
  }
}
</style>
