import React, { useMemo } from 'react'
import employeeList from '../../data/mockData.json'
import { TableColumns } from './TableColumns'
import TableFilter from './TableFilter'
import './Table.scss'

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table'

/**
 * Table
 * @returns {Reactnode}  jsx injected in DOM
 */

function Table() {
  if (localStorage.getItem('employeesList') === null) {
    localStorage.setItem('employeesList', JSON.stringify(employeeList))
  }

  let employeesList = JSON.parse(localStorage.getItem('employeesList'))

  // useMemo hook to avoid re-rendering until the data changes
  const columns = useMemo(() => TableColumns, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => employeesList, [])

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
  const { globalFilter, pageIndex, pageSize } = state

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
        <h3 className="table-header--title">{`currently ${employeesList.length} employees`}</h3>
        <TableFilter
          className="table-header--search"
          id="search"
          filter={globalFilter}
          setFilter={setGlobalFilter}
        />
      </header>
      <main className="table-main">
        <table className="table-main--list" {...getTableProps()}>
          <thead>{theadContent}</thead>
          <tbody {...getTableBodyProps()}>{tbodyContent}</tbody>
        </table>
      </main>
      <footer className="table-footer">
        <span className="table-footer--pageIndex">
          <strong>
            Page {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span className="table-footer--nav">
          <button
            className="table-nav--btn"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            « First
          </button>
          <button
            className="table-nav--btn"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            ‹ Previous
          </button>
          <button
            className="table-nav--btn"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next ›
          </button>
          <button
            className="table-nav--btn"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            Last »
          </button>
        </span>
      </footer>
    </>
  )
}

export default Table
