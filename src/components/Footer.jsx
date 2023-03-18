import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="redes-container">
      <ul>
        <li> <Link to="https://es-la.facebook.com/"className="facebook"><i className="fa-brands fa-facebook-f"></i></Link></li>
        <li> <Link to="https://www.instagram.com/"className="instagram"><i className="fa-brands fa-instagram"></i></Link></li>
        <li> <Link to="https://twitter.com/?lang=es/"className="twitter"><i className="fa-brands fa-twitter"></i></Link></li>
        <li> <Link to="https://www.linkedin.com/home/"className="linkedin"><i className="fa-brands fa-linkedin"></i></Link></li>
      </ul>
        
    </div>
  )
}

export default Footer