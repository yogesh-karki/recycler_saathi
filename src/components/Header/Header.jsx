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

              <div className="primary">
                <nav>
                  <ul>
                    
                    <li><NavLink activeClassName="active_class" to='/plastic_recycling'>plastic</NavLink></li>
                    <li><NavLink activeClassName="active_class" to='/problems'>problems</NavLink> </li>
                    <li><NavLink activeClassName="active_class" to='/updates'>updates</NavLink> </li>
                    {/* <li><NavLink activeClassName="active_class" to='/faq'>faqs</NavLink></li>
                    <li><NavLink activeClassName="active_class" to='/world_without_waste_vision'>World without waste vision</NavLink></li>
                    <li><NavLink activeClassName="active_class" to='/team'>Team</NavLink></li>
                    <li><NavLink activeClassName="active_class" to='/news'>News</NavLink></li> */}
                  </ul>
                </nav>
              </div>
            </div>
            

            <div className="secondary">
              <nav>
                <ul>
                  <li><NavLink activeClassName="active_class" to='/updates'>careers</NavLink> </li>
                  <li><NavLink activeClassName="active_class" to='about'>About Us</NavLink></li>
                  <li><NavLink to='/portal' className='portal_btn'>Portal</NavLink></li>
                </ul>
              </nav>
            </div>

          </div>
     
        </header>
    </>
  )
}

export default Header