import React from 'react'
import Logo from '../Logo'

import './footer.scss'

import { FacebookOutlined , InstagramOutlined, TwitterOutlined, LinkedinOutlined  } from '@ant-design/icons';

const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer_top">
                <div className="container">
                    <div className="wrap">
                        <h4>Follow our daily news</h4>
                        <div className="social_icon">
                            <a href="https://www.facebook.com/search/top?q=recycler%20saathi" target="_blank" ><FacebookOutlined /></a>
                            <a href="https://www.instagram.com/recyclersaathi/ " target="_blank" ><InstagramOutlined /></a>
                            <a href="https://twitter.com/creasionorg" target="_blank" ><TwitterOutlined /></a>
                            <a href="https://www.linkedin.com/company/creasion/" target="_blank" ><LinkedinOutlined /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_bottom">
                <div className="container">
                    <div className="wrap">
                        <div className="logo">
                            <p>© 2021 Recycler Saathi</p>
                        </div>

                        <p className='copyright'>Powered by Hue Shine</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer