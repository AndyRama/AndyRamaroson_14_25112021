// import React from 'react';
// import employeeList from '../../data/mockData.json';
// import titles from '../../data/tableTitles.json';
// import './Table.css';

// function Table() {
//   // const newEmployee = localStorage.getItem('newEmployee');
//   // const newEmployee = JSON.parse(localStorage.getItem('newEmployee'));
//   // console.log(newEmployee);
//   // employeeList.push((newEmployee));

//   return (
//     <table id="employees">
//       <thead>
//         {titles.map((title, index) => (
//           <tr key={index}>
//             <th>{title.firstName}</th>
//             <th>{title.lastName}</th>
//             <th>{title.startDate}</th>
//             <th>{title.department}</th>
//             <th>{title.dateOfBirth}</th>
//             <th colSpan="4">{title.address}</th>
//           </tr>
//         ))}
//       </thead>
//       <tbody>
//         {employeeList.map((employee, index) => (
//           <tr key={index}>
//             <td>{employee.first_name}</td>
//             <td>{employee.last_name}</td>
//             <td>{employee.start_date}</td>
//             <td>{employee.department}</td>
//             <td>{employee.date_of_birth}</td>
//             <td>{employee.street}</td>
//             <td>{employee.city}</td>
//             <td>{employee.state}</td>
//             <td>{employee.zip_code}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default Table

import React, { useMemo } from 'react'
import employeeList from '../../data/mockData.json'
import { TableColumns } from './TableColumns'
import './Table.scss'

import { useGlobalFilter, useTable } from 'react-table'

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
    useGlobalFilter
  )

  //Table Props to definie table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
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
}

export default Table
