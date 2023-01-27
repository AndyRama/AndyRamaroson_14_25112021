import { useEffect } from 'react'
import Table from '../../components/Table/Table'

function Employees() {
  useEffect(() => {
    document.title = 'HRnet | Employees'

    // HANDLING HEADERS SCOPE BY SETTING ATTRIBUTE
    // headers level 1
    // getNestedTags('tr', 0, 'th').map((item) =>
    //   setAttributes(item, {
    //     scope: 'colgroup',
    //   })
    // )
    // // headers level 2
    // getNestedTags('tr', 1, 'th').map((item) =>
    //   setAttributes(item, {
    //     scope: 'col',
    //   })
    // )
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
