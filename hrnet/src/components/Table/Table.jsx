import React from 'react'
import employeeList from '../../data/mockData.json'
import titles from '../../data/tableTitles.json'
import './Table.scss'

function Table() {
  return (
    <table id="employees">
      <thead>
        {titles.map((title, index) => (
          <tr key={index}>
            <th>{title.firstName}</th>
            <th>{title.lastName}</th>
            <th>{title.dateOfBirth}</th>
            <th>{title.startDate}</th>
            <th colSpan="4">{title.address}</th>
            <th>{title.department}</th>
          </tr>
        ))}
      </thead>
      <tbody>
        {employeeList.map((employee, index) => (
          <tr key={index}>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.date_of_birth}</td>
            <td>{employee.start_date}</td>
            <td>{employee.street}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zip_code}</td>
            <td>{employee.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
