import React from 'react'
import Select from 'react-select'

function Dropdown({ className, id, label, select, type, handleChange }) {
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

  return (
    <div className={`form-newEmployee--inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      {type === 'text' ? (
        <Select
          type="state"
          options={id === 'stateAbbrev' ? state : department}
          onChange={handleChange}
        />
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
