import { TableProps } from 'ant-design-vue'

export interface SuperTableProps extends TableProps {
    // 行拖拽
    rowDrag?: boolean
    // 列拖拽
    colDrag?: boolean
    // 列宽拖拽
    colWidthDrag?: boolean
}
