import React from 'react'
import './service.css'

const Services = () => {
  return (
    <div className='services'>

     <div className="serviceDetails">
        <h1 className='servicTag'>Our Services</h1>
        <p className='servicedesc'>We provide the most full medical services, so every person could have the approtunity to receive qualitative medical help </p>
        </div>
        <div className="servicesCard">
            <div className="serviceCardDetails">
        <i class="servicesIcon fa-solid fa-tooth"></i>
        <h3 className='serviceCardTag'>Dental care</h3>
        </div>
            <div className="serviceCardDetails">
            <i class="servicesIcon fas fa-lungs"></i>
        <h3 className='serviceCardTag'>Pulmonary</h3>
        </div>
            <div className="serviceCardDetails">
            <i class="servicesIcon fa-solid fa-brain"></i>
        <h3 className='serviceCardTag' >Neurological</h3>
        </div>
            <div className="serviceCardDetails">
            <i class="servicesIcon fa-regular fa-clipboard"></i>
        <h3 className='serviceCardTag'>Prediatrics</h3>
        </div>
       
     </div>
     
    </div>
  )
}

export default Services
