import React, { useState } from 'react'
import './Form.scss'

function Form() {
  const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    departement: '',
  }

  const [employee, setEmployee] = useState(initialState)

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.id]: e.target.value })
  }

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    e.preventDefault()

    // eslint-disable-next-line no-unused-vars
    const newEmployee = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      dateOfBirth: employee.dateOfBirth,
      startDate: employee.startDate,
      street: employee.street,
      city: employee.city,
      state: employee.state,
      zipCode: employee.zipCode,
      departement: employee.departement,
    }

    console.log({ ...newEmployee })
    console.log(newEmployee.id)
    localStorage.setItem('newEmployee', JSON.stringify(newEmployee))
  }

  const {
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    street,
    city,
    state,
    zipCode,
    departement,
  } = employee

  const btn =
    firstName === '' ||
    lastName === '' ||
    dateOfBirth === '' ||
    startDate === '' ||
    street === '' ||
    city === '' ||
    state === '' ||
    zipCode === '' ||
    departement === '' ? (
      <button type="submit" className="add-employee-button" disabled>
        Add an employee
      </button>
    ) : (
      <button type="submit" className="add-employee-button">
        Add an employee
      </button>
    )

  return (
    <form action="" id="add-employee-form" onSubmit={handleSubmit}>
      <img
        className="add-employee-ico"
        // src={iconAdd}
        alt="Health Wealth logo brand name"
      />
      <div className="input-wrapper">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="LastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="date-of-birth">Date of Birth</label>
        <input
          id="date-of-birth"
          type="date"
          value={dateOfBirth}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="text"
          id="startDate"
          value={startDate}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="departement">Departement</label>
        <input
          type="text"
          id="departement"
          value={departement}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      {btn}
      {/* <input
        type="submit"
        value="Add-employee"
        className="add-employee-button"
      /> */}
    </form>
  )
}

export default Form
