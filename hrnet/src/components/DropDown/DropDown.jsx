import React from 'react'
import Select from 'react-select'

function Dropdown({
  className,
  id,
  label,
  select,
  type,
  handleChange,
  state,
  department,
}) {
  return (
    <div className={`form-newEmployee--inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      {type === 'text' ? (
        <Select
          type="state"
          options={id === 'stateAbbrev' ? state : department}
          onChange={handleChange}
          isClearable
        />
      ) : (
        <select
          className="dropdownList"
          onChange={handleChange}
          aria-required="true"
          required
          id={id}
          isClearable
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
