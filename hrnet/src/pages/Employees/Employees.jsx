import { useEffect } from 'react'
import Table from '../../components/Table/Table'

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
