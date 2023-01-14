import React, { useState, useEffect } from 'react'
import IconAdd from '../Icons/IconAdd'
import employeeList from '../../data/mockData.json'
import inputData from '../../data/inputData.json'
import dropDownData from '../../data/dropDownData.json'

import Input from '../Input/Input'
import Dropdown from '../DropDown/DropDown'

import { useNavigate } from 'react-router-dom'
import { Modal, useModal } from 'andyrama-modal'
import confirm from '../Icons/IconUser'
import close from '../Icons/IconClose'

import './Form.scss'

/**
 * Form
 * @returns {Reactnode}  jsx injected in DOM
 */

function Form() {
  // Form module settings
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

  //Modal module settings
  const { isOpen, toggle, escToClose } = useModal()

  useEffect(() => {
    window.addEventListener('keydown', escToClose)
    return () => window.removeEventListener('keydown', escToClose)
  })

  const redirectTo = useNavigate()
  function goTo() {
    redirectTo('/employees')
  }

  // On change
  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value.trim() })
  }
  console.log(newEmployee)

  // Get data from local storage
  let employeesList =
    JSON.parse(window.localStorage.getItem('employeesList')) || employeeList

  // On submit
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

    // Open modal
    toggle()
  }

  return (
    <form action="" className="form-newEmployee" onSubmit={handleSubmit}>
      <IconAdd id="addUser" alt="Health Wealth add user" />

      {inputData.map((data, index) => (
        <Input
          key={index}
          type={data.type}
          className={data.className}
          htmlFor={data.id}
          label={data.label}
          id={data.id}
          value={newEmployee[data]}
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

      <Modal
        modal={isOpen}
        close={toggle}
        x={close}
        icon={confirm}
        title="Confirmation added"
        msgL1="New collaborator added"
        msgL2="Successfully registered"
        btn1="Add an employee"
        btn2="Employees List"
        redirectTo={goTo}
        autofocus
      />
    </form>
  )
}

export default Form
