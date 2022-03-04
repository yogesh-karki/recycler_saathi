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
                    
                    <li className='has_dropdown'>
                      <a href='#'>plastic</a>

                      <div className="sub_menu">
                        <NavLink  to='/about_plastic'>About Plastic</NavLink>
                        <NavLink  to='/plastic_introduction'>Plastic Introduction</NavLink>
                      </div>
                    </li>
                    <li><NavLink  to='/problems'>problems</NavLink> </li>
                    <li><NavLink  to='/updates'>updates</NavLink> </li>
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
                  <li><NavLink  to='/updates'>careers</NavLink> </li>
                  <li><NavLink  to='about'>About Us</NavLink></li>
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