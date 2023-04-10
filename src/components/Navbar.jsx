import React from 'react';
import '../Styles/navbar.css';
import Contact from '../pages/Contact';
import { useNavigate, NavLink } from 'react-router-dom';
import company from "./assets/logo.png";

const Navbar =()=>{
    const navigate= useNavigate();

    return (
        <>
            <nav className='main-nav'>
                
                <label className='logo'> <img src={company}/> Clowak Innovations</label>
                    <ul>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutus">About us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactus">Contact us</NavLink>
                        </li>
                    </ul>
            </nav>
        </>
    )
}

export default Navbar;