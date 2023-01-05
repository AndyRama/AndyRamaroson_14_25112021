import { useLocation, Link } from 'react-router-dom'
import IconAdd from '../../components/Icons/IconAdd'
import IconBrand from '../../components/Icons/IconBrand'
import IconList from '../Icons/IconList'
import IconLogoDesign from '../Icons/IconLogoDesign'

import './Navbar.scss'

function Navbar() {
  const path = useLocation().pathname
  return (
    <>
      <nav>
        <div className="nav-item nav-brand">
          <IconLogoDesign
            className="nav-logo-design"
            alt="Health Wealth logo design"
          />
          <IconBrand
            className="nav-logo-brand"
            alt="Health Wealth logo brand name"
          />
        </div>
        <div className="nav-item nav-menu">
          <h1>HRnet Employees</h1>
          <Link to="./Employees" className="nav-menu-choice">
            <IconList className="nav-ico" alt="Health Wealth logo menu list" />
            <span>Current</span>
          </Link>
          <Link to="/" className="nav-menu-choice">
            <IconAdd
              className="nav-ico"
              alt="Health Wealth logo Add employee"
            />
            <span>Create</span>
          </Link>
        </div>
      </nav>
      <hr className="nav-shadow" />
    </>
  )
}

export default Navbar
