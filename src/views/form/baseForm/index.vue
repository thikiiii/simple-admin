<script generic="T" lang="ts" setup>
import { ref } from 'vue'

defineOptions({ name: 'BaseForm' })

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: 50,
    resizable: true
  },
  {
    title: 'age',
    dataIndex: 'age',
    width: 50
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: 50
  },
  {
    title: 'operation',
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
