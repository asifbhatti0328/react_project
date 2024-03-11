import React from 'react'
import Logo from '../../asstes/images/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header>
        <div className="logo_img" id>
          <img src={Logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
              Home
              </Link>
            </li>
            <li>
              <Link to="/about-us">
              Service
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
              Contact
              </Link>
            </li>
            <li className="header_btn">
              <i className="fa-sharp fa-solid fa-phone" />
              +923467323422
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header