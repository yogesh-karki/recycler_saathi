import React from 'react'
import {  NavLink } from 'react-router-dom';



import './header.scss'

const Header = () => {
 

  return (
    <>
        <header>
          <div className="wrap">
            <div className="logo">
              <NavLink to="/">
                <img src="./images/logo.svg" />
              </NavLink>
            </div>
            <nav>
              <ul>
                <li><NavLink activeClassName="active_class" to='about'>About Us</NavLink></li>
                <li><NavLink activeClassName="active_class" to='/plastic_recycling'>plastic recycling </NavLink></li>
                <li><NavLink activeClassName="active_class" to='/faq'>faqs</NavLink></li>
                <li><NavLink activeClassName="active_class" to='/world_without_waste_vision'>World without waste vision</NavLink></li>
                <li><NavLink activeClassName="active_class" to='/team'>Team</NavLink></li>
                <li><NavLink activeClassName="active_class" to='/news'>News</NavLink></li>
              </ul>
            </nav>

            <div className="btn">
              <NavLink to='/portal' className='portal_btn'>Portal</NavLink>
            </div>
          </div>
     
        </header>
    </>
  )
}

export default Header