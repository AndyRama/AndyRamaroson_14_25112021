import Table from '../../components/Table/Table'
import { useEffect } from 'react'
import './Employees.scss'

function Employees() {
  useEffect(() => {
    document.title = 'HRnet | Employees'
  })

  return (
    <main className="employees-list">
      <h2>Current Employes</h2>
      <Table />
    </main>
  )
}
export default Employees
