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
                        <div className="sm_wrap">
                          <NavLink  to='/about_plastics'>About Plastics</NavLink>
                          <NavLink  to='/plastic_industry'>Plastic Industry</NavLink>
                          <NavLink  to='/world_without_waste_vision'>World Without Waste Vision</NavLink>
                        </div>
                      </div>
                    </li>
                    <li className='has_dropdown'>
                      <a href="#">problems</a>
                      <div className="sub_menu">
                        <div className="sm_wrap">
                          <NavLink  to='/plastic_introduction'>Global Problems</NavLink>
                          <NavLink  to='/about_plastic'>Regional Problems</NavLink>
                          <NavLink  to='/about_plastic'>National Problems</NavLink>
                        </div>
                      </div>
                    </li>
                    <li><NavLink  to='/problems'>solution</NavLink> </li>
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
                  <li><NavLink  to='about'>About Us</NavLink></li>
                  <li><NavLink  to='/updates'>careers</NavLink> </li>
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