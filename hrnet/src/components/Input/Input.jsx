import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Input({
  className,
  id,
  label,
  type,
  value,
  handleChange,
  startDate,
  handleChangeDatepickerStartDate,
  handleChangeDatepickerBirthDay,
  birthday,
}) {
  return (
    <div className={`form-newEmployee--inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      {id === 'startDate' && (
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => handleChangeDatepickerStartDate(date)}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="startDate selected"
        />
      )}
      {id === 'dateOfBirth' && (
        <DatePicker
          selected={birthday}
          onChange={(date: Date) => handleChangeDatepickerBirthDay(date)}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="birthday selected"
        />
      )}
      {type !== 'date' && (
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
