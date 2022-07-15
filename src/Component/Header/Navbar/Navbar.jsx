import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className="navbar-logo">EATMORE</Link>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link className='nav-links' to='/'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-links' to='/'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-links' to='/'>Product</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-links' to='/'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar