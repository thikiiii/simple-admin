<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import { RouteLocationMatched, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import DropdownMenu from '@/layout/components/Header/components/Breadcrumb/components/DropdownMenu.vue'

defineOptions({ name: 'Breadcrumb' })

const routes = ref<RouteLocationMatched[]>([])
const appStore = useAppStore()
const route = useRoute()
const router = useRouter()

watch(() => route.path, () => {
    routes.value = route.matched.filter(item => item.path !== '/')
    console.log(routes.value)
}, { immediate: true })

</script>

<template>
  <a-breadcrumb :class="appStore.dynamicTopDark.className" class="breadcrumb">
    <a-breadcrumb-item v-for="item in routes" :key="item.path">
      <span @click="!item.children?.length&&router.push(item.path)">
      {{ item.meta?.title }}
      </span>
      <template v-if="item.children?.length" #droplist>
        <dropdown-menu :routes="item.children" />
      </template>
    </a-breadcrumb-item>
  </a-breadcrumb>

</template>

<style lang="less" scoped>
.breadcrumb {
  &.dark {
    color: @text-light;
    :deep(.arco-breadcrumb-item) {
      color: @text-light;
      svg{
        color: @text-light;
      }
    }
  }
}
</style>
