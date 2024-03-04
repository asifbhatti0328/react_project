import React from 'react'

const ServiceCard = ({Service_img, title}) => {
  return (
    <div className='service_card'>
    <img src={Service_img ? Service_img : 'https://images.pexels.com/photos/4107118/pexels-photo-4107118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width='100%' alt="" />
    <div className='over_lay'>
     <div className='content'>
     <h4>{title}</h4>
     <button>Book Now</button>
     </div>
    </div>
    </div>
  )
}

export default ServiceCard