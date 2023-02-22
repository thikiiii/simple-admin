<script lang="ts" setup>
const routes = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/channel',
        label: 'Channel',
        children: [
            {
                path: '/users',
                label: 'Users'
            },
            {
                path: '/permission',
                label: 'Permission'
            }
        ]
    },
    {
        path: '/news',
        label: 'News'
    }
]
</script>

<template>
  <a-breadcrumb class="text-[16px]" :routes="routes" />
</template>

<style lang="less" scoped>
:global(.arco-breadcrumb-item-dropdown-icon){
  font-size: inherit;
}
:global(.arco-breadcrumb){
  align-items: normal;
}
:global(.arco-breadcrumb-item) {
  line-height: normal;
}
</style>
