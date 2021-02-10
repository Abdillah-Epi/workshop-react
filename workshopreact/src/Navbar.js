import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="h-20">
            <div className="nav-wrapper bg-gray-600 pt-2 pl-2">
                <Link to="/" className="brand-logo"><img width="50" height="50" src="./img/chicken.png"/></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                </ul>
            </div>
      </nav>
    )
}

export default Navbar
