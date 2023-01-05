import React from 'react'
import './Form.scss'

function Form() {
  return (
    <form action="" id="add-employee-form">
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
          // value={firstName}
          // onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="LastName">last Name</label>
        <input
          type="text"
          id="lastName"
          // value={lastName}
          // onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" /> {/* Change datapicker */}
      </div>
      <div className="input-wrapper">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="text"
          id="startDate"
          // value={startDate}
          // onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          // value={street}
          // onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          // value={city}
          // onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          // value={state}
          // onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          // value={zipCode}
          // onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="departement">Departement</label>
        <input
          type="text"
          id="departement"
          // value={departement}
          // onChange={handleChange}
          autoComplete="off"
        />
      </div>
      {/* {btn} */}
    </form>
  )
}

export default Form
