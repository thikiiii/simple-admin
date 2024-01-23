<script generic="T" lang="ts" setup>
import { ref } from 'vue'

defineOptions({ name: 'BaseForm' })

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 50,
    resizable: true
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: 50
  },
  {
    title: '地址',
    dataIndex: 'address',
    width: 50
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 50
  }
]
const data = []


const dataSource = ref(data)

function handleResizeColumn(w,col) {
  col.width = w
}
</script>

<template>
  <div>
    <base-table
:columns="columns" :data-source="dataSource" heading="表格标题"
                @resize-column="handleResizeColumn" />
  </div>
</template>

<style lang="scss" scoped>


</style>
