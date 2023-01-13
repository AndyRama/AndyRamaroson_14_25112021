import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Input({ className, id, label, type, value, handleChange }) {
  return (
    <div className={`form-newEmployee--inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      {type === 'date' ? (
        <DatePicker
          type={type}
          id={id}
          selected={value}
          onChange={handleChange}
          autoComplete="off"
          aria-required="true"
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          autoComplete="off"
          aria-required="true"
          required
        />
      )}
    </div>
  )
}

export default Input
