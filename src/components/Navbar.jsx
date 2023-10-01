import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>

    <nav>
        <ul>
            <li>
                <NavLink to="/" className='link'>Home</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className='link'>Contact</NavLink>
            </li>
            <li>
                <NavLink to="/blog" className='link'>Blog</NavLink>
            </li>
        </ul>
    </nav>

      
    </>
  )
}

export default Navbar;