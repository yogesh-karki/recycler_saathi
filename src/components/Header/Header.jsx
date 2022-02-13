import React from 'react'
import Logo from '../Logo'

import './header.scss'

const Header = () => {
  return (
    <>
        <header>
          <div className="container">
          <div className="wrap">
                <div className="logo">
                    <Logo />
                </div>

                <nav>
                  <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">PROGRAMS </a></li>
                    <li><a href="">updates</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">News</a></li>
                  </ul>
                </nav>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header