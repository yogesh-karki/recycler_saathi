import React from 'react'
import {  NavLink } from 'react-router-dom';

import Logo from '../Logo'

import './header.scss'

const Header = () => {
 

  return (
    <>
        <header>
          <div className="wrap">
            <div className="logo">
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>

            <nav>
              <ul>
                <li><NavLink activeClassName="active_class" to='about'>About Us</NavLink></li>
                <li><NavLink activeClassName="active_class" to='/plastic_recycling'>plastic recycling </NavLink></li>
                <li><NavLink activeClassName="active_class" to='/faqs'>faqs</NavLink></li>
                <li><NavLink activeClassName="active_class" to='/world_without_waste_vision'>WWWV</NavLink></li>
                <li><NavLink activeClassName="active_class" to='/team'>Team</NavLink></li>
                <li><NavLink activeClassName="active_class" to='/news'>News</NavLink></li>
              </ul>
            </nav>

            <div className="btn">
              <a href="">Portal</a>
            </div>
          </div>
     
        </header>
    </>
  )
}

export default Header