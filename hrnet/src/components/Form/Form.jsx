import React, { useState, useEffect } from 'react'
import IconAdd from '../Icons/IconAdd'
import employeeList from '../../data/mockData.json'
import inputData from '../../data/inputData.json'
import dropDownData from '../../data/dropDownData.json'
import moment from 'moment'

import Input from '../Input/Input'
import Dropdown from '../DropDown/DropDown'

import { useNavigate } from 'react-router-dom'
import { Modal, useModal } from 'andyrama-modal'
import close from '../Icons/IconClose'

import './Form.scss'

/**
 * Form
 * @returns {Reactnode}  jsx injected in DOM
 */

function Form() {
  const state = [
    { value: 'France', label: 'France' },
    { value: 'Californie', label: 'Californie' },
    { value: 'Madagascar', label: 'Madagascar' },
  ]

  const department = [
    { value: 'Research and Development', label: 'Research and Development' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Support', label: 'Support' },
  ]

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
  const [startDate, setStartDate] = useState(new Date())
  const [birthday, setBirthday] = useState(new Date())

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

  const handleChangeDatepickerBirthDay = (date) => {
    const formattedDate = moment(date).format('DD-MM-YY').replace(/-/g, '/')
    setBirthday(formattedDate)
    setNewEmployee({ ...newEmployee, dateOfBirth: formattedDate })
  }

  const handleChangeDatepickerStartDate = (date) => {
    const formattedStart = moment(date).format('DD-MM-YY').replace(/-/g, '/')
    setStartDate(formattedStart)
    console.log(date)
    setNewEmployee({ ...newEmployee, startDate: formattedStart })
  }

  const handleChangeSelect = (value) => {
    const findValueInState = state.find((item) => item.value === value.value)

    if (findValueInState) {
      setNewEmployee({ ...newEmployee, stateAbbrev: value.value })
    } else {
      setNewEmployee({ ...newEmployee, department: value.value })
    }
  }

  // On change
  const handleChange = (e) => {
    console.log(e.target)
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value.trim() })
  }
  console.log(newEmployee)

  // Get data from local storage
  let employeesList =
    JSON.parse(window.localStorage.getItem('employeesList')) && employeeList

  // On submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // update data
    newEmployee.formattedDate = newEmployee.formattedDate.replace(/-/g, '/')
    employeesList.push(newEmployee)
    console.log(employeesList)
    // complete / correct data

    newEmployee.startDate = newEmployee.startDate.replace(/-/g, '/')

    // store data
    window.localStorage.setItem('employeesList', JSON.stringify(employeesList))

    // reset form
    // setNewEmployee({ ...newEmployee }, e.target.reset())

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
          startDate={startDate}
          handleChangeDatepickerStartDate={handleChangeDatepickerStartDate}
          handleChangeDatepickerBirthDay={handleChangeDatepickerBirthDay}
          birthday={birthday}
          dateFormat={'dd/MM/YY'}
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
          handleChange={handleChangeSelect}
          state={state}
          department={department}
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
        icon={IconAdd}
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
