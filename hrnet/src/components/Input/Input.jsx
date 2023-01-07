function Input({ className, id, label, type, value, handleChange }) {
  return (
    <div className={`form-newEmployee--inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        aria-required="true"
        required
      />
    </div>
  )
}

export default Input
