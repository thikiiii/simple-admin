<script setup lang="ts">
defineOptions({ name: 'Menu' })
</script>

<template>
  <a-menu>
    <a-sub-menu key="0">
      <template #icon><IconApps /></template>
      <template #title>Navigation 1</template>
      <a-menu-item class="text-[18px]" key="0_0">Menu 1</a-menu-item>
      <a-menu-item key="0_1">Menu 2</a-menu-item>
      <a-menu-item key="0_2" disabled>
        Menu 3
      </a-menu-item>
      <a-sub-menu>
        <template #icon><IconApps /></template>
        <template #title>Navigation 1</template>
        <a-menu-item key="11">
          dsad
        </a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="1">
      <template #icon><IconBug /></template>
      <template #title>Navigation 2</template>
      <a-menu-item key="1_0">Menu 1</a-menu-item>
      <a-menu-item key="1_1">Menu 2</a-menu-item>
      <a-menu-item key="1_2">Menu 3</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="2">
      <template #icon><IconBulb /></template>
      <template #title>Navigation 3</template>
      <a-menu-item key="2_0">Menu 1</a-menu-item>
      <a-menu-item key="2_1">Menu 2</a-menu-item>
      <a-menu-item key="2_2">Menu 3</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<style scoped>

</style>
