<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
import { RouteLocationMatched, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { BreadcrumbRoute } from '@arco-design/web-vue'

const routes = ref<BreadcrumbRoute[]>([])
const appStore = useAppStore()
const route = useRoute()
const router = useRouter()
const mapBreadcrumbRoute = (routeMatched:RouteLocationMatched[]):BreadcrumbRoute[] => routeMatched.map(item => {
    return {
        path: item.path,
        label: item.meta.title,
        children: item.children?.length ? mapBreadcrumbRoute(item.children as RouteLocationMatched[]) : undefined
    }
})

watch(() => route.path, () => {
    routes.value = mapBreadcrumbRoute(route.matched).filter(item => item.path !== '/')
    console.log(routes.value)
},{ immediate: true })

</script>

<template>
  <a-breadcrumb :class="appStore.dynamicTopDark.className" class="breadcrumb" :routes="routes" />
<!--    <template #item-render="{route}">-->
<!--      <span @click="router.push(route.path)">-->
<!--        {{ route.label }}-->
<!--      </span>-->
<!--    </template>-->
<!--  </a-breadcrumb>-->
</template>

<style lang="less" scoped>
.breadcrumb{
  &.dark{
    :deep(.arco-breadcrumb-item a) {
      color: @text-light;
      &:hover{
        background-color: @full-dark;
      }
    }
    :deep(.arco-breadcrumb-item:last-child,.arco-breadcrumb-item-dropdown-icon) {
      color: @text-light;
    }
  }
}
</style>
