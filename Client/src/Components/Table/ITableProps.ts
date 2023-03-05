import type { ColumnsType } from 'antd/es/table';

export interface ITableProps<T>{
    columns: ColumnsType<T>
    removeActionIcon?: boolean
    featureName: string
}