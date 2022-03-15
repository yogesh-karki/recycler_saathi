import React from 'react'
import {  NavLink } from 'react-router-dom';

import './footer.scss'

import { FacebookOutlined , InstagramOutlined, TwitterOutlined, LinkedinOutlined  } from '@ant-design/icons';

const Footer = () => {

    const date = new Date();
    let year= date.getFullYear()


    return (
    <>
        <footer>
            <div className="sitemap">
                <div className="container">
                    <div className="wrap">
                        <div className="sm">
                            <h4>Plastics</h4>
                            <NavLink to= "/about_plastics">About Plastics</NavLink>
                            <NavLink to= "/plastic_industry">Plastic Industry</NavLink>
                            <NavLink to= "/world_without_waste_vision">World Without Waste Vision</NavLink>
                        </div>

                        <div className="sm">
                            <h4>Problems</h4>
                            <NavLink to= "/global_problems">Global Problems</NavLink>
                            <NavLink to= "/regional_problems">Regional Problems</NavLink>
                            <NavLink to= "/national_problems">National Problems</NavLink>
                        </div>

                        

                        <div className="sm">
                            <h4>Recycler Saathi</h4>
                            <NavLink to= "/about">About</NavLink>
                            <NavLink to= "/portal">Portal</NavLink>
                            <NavLink to= "/programs">Our Programs</NavLink>
                            <NavLink to= "/milestones">Milestones</NavLink>
                            <NavLink to= "/team">Team</NavLink>
                        </div>

                        <div className="sm">
                            <h4>Join Us</h4>
                            <NavLink to= "/">Bailing Partner</NavLink>
                            <NavLink to= "/">Recycler Saathi</NavLink>
                            <NavLink to= "/">Waste Smart School</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_bottom">
                <div className="container">
                    <div className="wrap">
                        <div className="logo_support">
                            <div className="img">
                                <h4>An initiative of</h4>
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