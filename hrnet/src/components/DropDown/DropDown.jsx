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
  departement,
}) {
  return (
    <div className={`form-newEmployee--inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      {type === 'text' ? (
        <Select
          type="state"
          options={id === 'stateAbbrev' ? state : departement}
          onChange={handleChange}
          aria-required="true"
          required
          // state={state}
          // departement={departement}
        />
      ) : (
        <select
          className="dropdownList"
          onChange={handleChange}
          aria-required="true"
          required
          id={id}
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
