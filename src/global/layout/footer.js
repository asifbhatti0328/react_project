import React from 'react'
import Logo from '../../asstes/images/logo.svg'

const Footer = () => {
  return (
    <div>
          <footer>
        <div className="coloumn_one">
          <div className="logo_img" id>
            <img src={Logo} alt="" />
          </div>
          <p>
            We make sure that your safety is never compromised.This is why we hire all the staff under the roof of home comfort,just for your satisfaction.
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div className="coloumn_two">
          <ul>
            <li>
              Home
            </li>
            <li>
              Servies
            </li>
            <li>
              Contact Us
            </li>
            <li>
              About Us
            </li>
          </ul>
        </div>
        <div className="coloumn_three">
          <ul>
            <li>
              Facebook
            </li>
            <li>
              Twitter
            </li>
            <li>
              Linkedln
            </li>
            <li>
              instagram
            </li>
          </ul>
        </div>
        <div className="coloumn_four">
          <ul>
            <li>
              +923467323422
            </li>
            <li>
              asifbhatti03467323@gmail.com
            </li>
          </ul>
          <div className="news_letter">
            <input type="text" placeholder="Enter Email" />
            <button>Send</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer