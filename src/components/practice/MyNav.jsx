import React from 'react';
import { NavLink } from 'react-router-dom';

const MyNav = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/chat" >Chat</NavLink>
                </li>

                <li>
                    <NavLink to="/account" >Account</NavLink>
                </li>

                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default MyNav;