import { useEffect } from 'react'
import Form from '../../components/Form/Form'
import './Home.scss'

import { getElement } from '../../utils/handlers'
import { getElements } from '../../utils/handlers'
import { setAttributes } from '../../utils/handlers'

function Home() {
  useEffect(() => {
    document.title = 'HRnet | Home'

    // FILLING THE ADDRESS BLOCK WITH THE ADDRESS ITEMS
    getElements('address').map((item) => {
      return <h3>Address</h3> && getElement('addressContainer').append(item)
    })
  })

  return (
    <main aria-labelledby="page-title">
      <h2 tabIndex="0" id="page-title">
        Add an employee
      </h2>
      <Form />
    </main>
  )
}
export default Home
