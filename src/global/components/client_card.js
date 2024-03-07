import React from 'react'
import { IoStar } from "react-icons/io5";
import clientImg from '../../asstes/images/review_img.png'

const ClientCard = () => {
  return (
    <div className='client_card'>
    <div className='outer_content'>
    <div className='img'>
  <img src={clientImg} alt="" />
    </div>
    <div className='img_content'>
     <h2>
     Mishi Doger
     </h2>
    
    <div className='rating'>
    <small>3 months ago</small>
    <div className='star'>
    < IoStar color='#FFB800' className='icon' size={20} />
    < IoStar color='#FFB800' className='icon' size={20} />
    < IoStar color='#FFB800' className='icon' size={20} />
    < IoStar color='#FFB800' className='icon' size={20} />
    </div>
    </div>
    </div>
    </div>

    <div className='lower_content'>
      <p>
      We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.
      </p>
    </div>
   </div>
  )
}

export default ClientCard