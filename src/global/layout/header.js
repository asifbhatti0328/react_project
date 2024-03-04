import React from 'react'
import Logo from '../../asstes/images/logo.svg'

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
              Home
            </li>
            <li>
              Servies
            </li>
            <li>
              Contect
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