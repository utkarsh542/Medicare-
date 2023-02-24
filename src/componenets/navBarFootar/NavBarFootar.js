import React from 'react'
import './navBarFootar.css'

const NavBarFootar = () => {
  return (
    <div>
       <div className="navBarF">
      <div className="navPartsF">
        <div className="leftBarF">
          <span className="leftBarMediF">Medi</span>
          <span className="leftBarcareF">Care+</span>
        </div>
        <div className="centerBarF">
          <ul className="centerBarListF">
            <li className="centerBarTitleF">Home</li>
            <li className="centerBarTitleF">About</li>
            <li className="centerBarTitleF">Service</li>
           
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBarFootar
