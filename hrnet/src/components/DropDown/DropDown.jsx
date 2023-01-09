import React from 'react'
import Select from 'react-select'
import dropDownData from './../../data/dropDownData.json'

function Dropdown({ className, id, label, select, type, value, handleChange }) {
  return (
    <div className={`form-newEmployee--inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      {type === 'text' ? (
        <Select type="state" options={dropDownData} onChange={handleChange} />
      ) : (
        <select
          className="dropdownList"
          id={id}
          onChange={handleChange}
          aria-required="true"
          required
        >
          {select.map((item) => (
            <option
              title="dropdownOption"
              type="text"
              value={item.value}
              key={item.abbrev}
            >
              {item.label}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}

export default Dropdown
