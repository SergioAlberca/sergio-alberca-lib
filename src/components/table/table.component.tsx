import React from 'react'
import { ColumnDefinitionType } from './types/column'
import TableHeader from './table-header/table-header.component'
import TableRows from './table-rows/table-rows.component'

type TableProps<T, K extends keyof T> = {
  data: Array<T>
  columns: Array<ColumnDefinitionType<T, K>>
}

const style = {
  borderCollapse: 'collapse',
} as const

const Table = <T, K extends keyof T>({ data, columns }: TableProps<T, K>): JSX.Element => {
  return (
    <table style={style}>
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} />
    </table>
  )
}

export default Table
