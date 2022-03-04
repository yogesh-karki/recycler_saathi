import React from 'react'

import './footer.scss'

import { FacebookOutlined , InstagramOutlined, TwitterOutlined, LinkedinOutlined  } from '@ant-design/icons';

const Footer = () => {

    const date = new Date();
    let year= date.getFullYear()


    return (
    <>
        <footer>
            <div className="suscribe">
                <div className="container">
                    <div className="wrap">
                        <h3>Become a <strong>Saathi</strong></h3>
                        <p> We are excited to help your bailing centers recycle more. To get started, sign up below and send us a picture of your nearest collector to win exciting prizes.</p>

                        <div className="btn">
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

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
                        <div className="logo_support">
                            <div className="img">
                                <h4>An initiation of</h4>
                                <img src="./images/creasion.svg" alt="" />
                            </div>

                            <div className="img">
                                <h4>Supported by</h4>
                                <img src="./images/cococola_support.svg" alt="" />
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_copy">
                <div className="container">
                    <div className="wrap">
                        <p>© {year} <a href="https://creasion.org/" target="_b">Creasion. </a> </p>
                        <p className='copyright'>Powered by <a href="https://hueshine.com/">Hue Shine</a></p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer