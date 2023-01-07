import React, { useState } from 'react'
import IconAdd from '../Icons/IconAdd'
import employeeList from '../../data/mockData.json'
import inputData from '../../data/inputData.json'
import dropDownData from '../../data/dropDownData.json'

import Input from '../Input/Input'
import Dropdown from '../DropDown/DropDown'

import './Form.scss'

import { useNavigate } from 'react-router-dom'

/**
 * Form
 * @returns {Reactnode}  jsx injected in DOM
 */
export default function Form() {
  // FORM SETTINGS
  const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    street: '',
    city: '',
    zipCode: '',
    stateAbbrev: '',
    startDate: '',
    department: '',
  }

  const [newEmployee, setNewEmployee] = useState(initialState)

  const redirectTo = useNavigate()
  function goTo() {
    redirectTo('/employees')
  }

  // ON CHANGE
  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value.trim() })
  }

  // GET DATA
  let employeesList =
    JSON.parse(window.localStorage.getItem('employeesList')) || employeeList

  // ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault()

    // update data
    employeesList.push(newEmployee)

    // complete / correct data
    newEmployee.id = employeesList.length
    newEmployee.dateOfBirth = newEmployee.dateOfBirth.replace(/-/g, '/')
    newEmployee.startDate = newEmployee.startDate.replace(/-/g, '/')

    // store data
    window.localStorage.setItem('employeesList', JSON.stringify(employeesList))

    // reset form
    setNewEmployee({ ...newEmployee }, e.target.reset())
  }

  return (
    <form action="" className="form-newEmployee" onSubmit={handleSubmit}>
      <IconAdd
        className="add-employee-ico"
        alt="Health Wealth logo brand name"
      />

      {inputData.map((data, index) => (
        <Input
          key={index}
          type={data.type}
          className={data.className}
          htmlFor={data.id}
          label={data.label}
          id={data.id}
          value={newEmployee[index]}
          handleChange={handleChange}
          autoComplete="off"
        />
      ))}

      <fieldset
        id="addressContainer"
        className="form-newEmployee--addressContainer"
      >
        <legend className="form-newEmployee--addressGroup">Address</legend>
      </fieldset>

      {dropDownData.map((data, index) => (
        <Dropdown
          key={index}
          type={data.type}
          className={data.className}
          htmlFor={data.id}
          label={data.label}
          id={data.id}
          select={data.select}
          handleChange={handleChange}
        />
      ))}

      <button type="submit" className="submit form-newEmployee--submit">
        Save
      </button>

      {/* {submit} */}
    </form>
  )
}
