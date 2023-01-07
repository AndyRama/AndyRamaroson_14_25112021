function Dropdown({ className, id, label, select, handleChange }) {
  return (
    <div className={`form-newEmployee--inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
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
    </div>
  )
}

export default Dropdown
