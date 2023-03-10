import React, { useState, useEffect } from 'react'
import IconAddForm from '../Icons/IconAddForm'
import employeeList from '../../data/mockData.json'
import inputData from '../../data/inputData.json'
import dropDownData from '../../data/dropDownData.json'
import moment from 'moment'

import Input from '../Input/Input'
import Dropdown from '../DropDown/DropDown'

import { useNavigate } from 'react-router-dom'
import { Modal, useModal } from 'andyrama-modal'

import close from '../../asset/ico-close.svg'
import confirme from '../../asset/ico-user-confirm.svg'

import './Form.scss'

/**
 * Form
 * @returns {Reactnode}  jsx injected in DOM
 */

function Form() {
  const state = [
    { value: 'AL', label: 'Alabama', abbrev: 'AL' },
    { value: 'AK', label: 'Alaska', abbrev: 'AK' },
    { value: 'AZ', label: 'Arizona', abbrev: 'AZ' },
    { value: 'AR', label: 'Arkansas', abbrev: 'AR' },
    { value: 'CA', label: 'California', abbrev: 'CA' },
    { value: 'CO', label: 'Colorado', abbrev: 'CO' },
    { value: 'CT', label: 'Connecticut', abbrev: 'CT' },
    { value: 'DE', label: 'Delaware', abbrev: 'DE' },
    { value: 'FR', label: 'France', abbrev: 'FR' },
  ]

  const department = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Ressources', label: 'Human Ressources' },
    { value: 'Legal', label: 'Legal' },
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
    redirectTo('employees')
  }

  const handleChangeDatepickerBirthDay = (date) => {
    const dateOfBirth = moment(date).format('DD-MM-YY').replace(/-/g, '/')
    setBirthday(dateOfBirth.parseIsoDate)
    setNewEmployee({ ...newEmployee, dateOfBirth: dateOfBirth })
  }

  const handleChangeDatepickerStartDate = (date) => {
    const startDate = moment(date).format('DD-MM-YY').replace(/-/g, '/')
    setStartDate(startDate.parseIsoDate)
    setNewEmployee({ ...newEmployee, startDate: startDate })
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
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value.trim() })
  }

  // Get data from local storage
  let employeesList = JSON.parse(
    window.localStorage.getItem('employeesList')
  ) || [employeeList]

  // On submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // update data
    employeesList.push(newEmployee)

    // complete / correct data
    newEmployee.id = employeesList.length

    // store data
    window.localStorage.setItem('employeesList', JSON.stringify(employeesList))

    // reset form
    setNewEmployee({ ...newEmployee }, e.target.reset())

    // reset dropdown
    setNewEmployee({ ...newEmployee, stateAbbrev: '' })
    setNewEmployee({ ...newEmployee, department: '' })

    // reset datepicker
    setStartDate(new Date())
    setBirthday(new Date())

    // Open modal
    toggle()
  }

  return (
    <form action="" className="form-newEmployee" onSubmit={handleSubmit}>
      <IconAddForm id="addUser" alt="Health Wealth add user" />

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
          birthday={birthday}
          handleChangeDatepickerStartDate={handleChangeDatepickerStartDate}
          handleChangeDatepickerBirthDay={handleChangeDatepickerBirthDay}
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
        icon={confirme}
        title="Confirmation"
        msgL1="New collaborator"
        msgL2="Successfully registered"
        btn1="Add new employee"
        btn2="Employees List"
        redirect={goTo}
        // hideBtn1={true}
        // hideFooter={true}
        // hideBtn2={true}
        // hideMsgL2={true}
        // hideIcon={true}
        autofocus
      />
    </form>
  )
}

export default Form
