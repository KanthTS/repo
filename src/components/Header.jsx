import React from 'react'
import{Link} from 'react-router-dom';
function Header() {
  return (
    <div className="bg-black">
     
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="register" className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="technologies" className="nav-link">Technoligies</Link>
        </li>
      </ul>
    
    </div>
  )
}

export default Header