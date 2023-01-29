import { useEffect } from 'react'
import Table from '../../components/Table/Table'

function Employees() {
  useEffect(() => {
    document.title = 'HRnet | Employees'
  })

  return (
    <main aria-labelledby="page-title" className="table">
      <h2 tabIndex="0" id="page-title">
        Employees list
      </h2>
      <Table />
    </main>
  )
}
export default Employees
