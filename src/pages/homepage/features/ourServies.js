import React from 'react'
import ServiceCard from '../../../global/components/service_card'

const OurServies = () => {
  return (
    <div className='ourServies page_width'>
        <h2 className='global_title'>Explore our <span>Servies</span> </h2>
        <div className='card_grid'>
        <ServiceCard Service_img="https://images.pexels.com/photos/9462302/pexels-photo-9462302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Ac Duct" />
        <ServiceCard Service_img="https://images.pexels.com/photos/4107118/pexels-photo-4107118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Spring Cleaning" />
        <ServiceCard Service_img="https://images.pexels.com/photos/4108811/pexels-photo-4108811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="House Cleaning" />
        <ServiceCard Service_img="https://images.pexels.com/photos/5977765/pexels-photo-5977765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Body Cleaning" />
        </div>

    </div>
  )
}

export default OurServies