import React, { useMemo } from 'react'
import employeeList from '../../data/mockData.json'
import { TableColumns } from './TableColumns'
import './Table.scss'

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table'

function Table() {
  // Get data
  let employeesList =
    JSON.parse(window.localStorage.getItem('employeeList')) || employeeList
  console.log(employeesList)

  // useMemo hook to avoid re-rendering until the data changes
  const columns = useMemo(() => TableColumns, [])
  const data = useMemo(() => employeeList, [])

  //Table instance
  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  //Table Props to definie table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    pageSize,
    setGlobalFilter,
  } = tableInstance

  const theadContent = headerGroups.map((headerGroup) => {
    return (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th {...column.getHeaderProps(column.getSortByToggleProps())}>
            {column.render('Header')}
            <span className="table-main--sorter">
              {column.isSorted ? (
                column.isSortedDesc ? (
                  <button
                    aria-label="sorted by descent order"
                    className="table-main--arrowDown"
                  >
                    ▾
                  </button>
                ) : (
                  <button
                    aria-label="sorted by ascent order"
                    className="table-main--arrowUp"
                  >
                    ▴
                  </button>
                )
              ) : (
                <button aria-label="not sorted" className="table-main--bullet">
                  •
                </button>
              )}
            </span>
          </th>
        ))}
      </tr>
    )
  })

  //TABLE BODY content mapping to rendering
  const tbodyContent = page.map((row) => {
    prepareRow(row)
    return (
      <tr {...row.getRowProps()}>
        {row.cells.map((cell) => {
          return (
            <td tabIndex="0" {...cell.getCellProps()}>
              {cell.render('Cell')}
            </td>
          )
        })}
      </tr>
    )
  })

  //Handle Table State for diff opts
  const { globalFilter, pageIndex, pageSige } = state

  return (
    <>
      <header className="table-header">
        <label htmlFor="show-entries" className="table-header--entries">
          Show
          <select
            value={pageSize}
            id="show-entries"
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          entries
        </label>
      </header>
    </>
  )
}

export default Table
