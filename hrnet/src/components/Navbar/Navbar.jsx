// import logoDesign from '../../assets/HRnet_logo-design.svg'
// import IconBrand from '../../assets/HRnet_logo-brand.svg'
import IconAdd from '../../components/Icons/IconAdd'
import IconBrand from '../../components/Icons/IconBrand'
// import IconList from '../../components/Icons/IconList'

import { useLocation, Link } from 'react-router-dom'

import './Navbar.scss'

function Navbar() {
  const path = useLocation().pathname
  return (
    <>
      <nav>
        <div className="nav-item nav-brand">
          <h2>Hrnet Employees</h2>
          {path === '/' ? (
            <Link to="./Employees" className="nav-menu-choise">
              <IconBrand
                className="nav-ico"
                alt="Health Wealth logo brand name"
              />
              <span>Current</span>
            </Link>
          ) : (
            <Link to="/" className="nav-menu-choise">
              <IconAdd className="nav-ico" alt="Health Wealth logo Add user" />
              <span>Create</span>
            </Link>
          )}
        </div>
      </nav>
      <hr className="nav-shadow" />
    </>
  )
}

export default Navbar
