import React, { useState } from 'react'
import IconSearch from '../Icons/IconSearch'
import { useAsyncDebounce } from 'react-table'

/**
 * TableFilter
 *
 * @param   {object}      props
 * @param   {string}      props.filter        [initial value]
 * @param   {function}    props.setFilter     [new value || undefined]
 * @param   {string}      props.className     [span wrapper className]
 * @param   {string}      props.id            [label "html for" identifiant]
 *
 * @returns {Reactnode}   jsx injected in DOM
 */

function TableFilter({ filter, setFilter, className, id }) {
  const [value, setValue] = useState(filter)

  const handleChange = useAsyncDebounce((value) => {
    setFilter(value || undefined)
  }, 500)

  return (
    <span className={className}>
      <IconSearch />
      <label htmlFor={id}>Search:</label>
      <input
        id={id}
        type="search"
        role="searchbox"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          handleChange(e.target.value)
        }}
      />
    </span>
  )
}
export default TableFilter
