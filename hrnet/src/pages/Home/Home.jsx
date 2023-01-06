import Form from '../../components/Form/Form'
import { useEffect } from 'react'
import './Home.scss'

function Home() {
  useEffect(() => {
    document.title = 'HRnet | Home'
  })

  return (
    <main className="add-employee">
      <section className="add-employee-content">
        <h2>Add an employee</h2>
        <Form />
      </section>
    </main>
  )
}
export default Home
