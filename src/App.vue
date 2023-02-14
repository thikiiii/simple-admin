<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const test = () => {
    toggleDark()
}
const value = ref()
const options = [
    {
        value: 'Option1',
        label: 'Option1'
    },
    {
        value: 'Option2',
        label: 'Option2'
    },
    {
        value: 'Option3',
        label: 'Option3'
    },
    {
        value: 'Option4',
        label: 'Option4'
    },
    {
        value: 'Option5',
        label: 'Option5'
    }
]
</script>

<template>
  <el-button type="primary">test</el-button>
  <el-button @click="test">test</el-button>
  <el-select v-model="value" class="m-2" placeholder="Select" size="large">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
  <el-card>
    <template #header>
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
</template>

<style lang="scss" scoped>
.test {
  width: 300px;
  height: 300px;
  //background: @border-color-base;
}
</style>
