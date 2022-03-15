import React from 'react'
import ScrollTop from '../../components/ScrollTop'
import {  NavLink } from 'react-router-dom';

import BannerHalf from '../../components/Banner/BannerHalf'
import './about.scss'

import ProgramData from './ProgramData'

const Programs = () => {
    console.log(ProgramData)

    return (
        <>
            <ScrollTop />
            <BannerHalf 
                image="url(./images/programs_banner.jpg)" 
                subtitle="About Us" 
                title="<h3><strong>Our Programs</strong> </h3>" 

            />

            <section className="programs">
                <div className="container">
                    {
                        ProgramData.map((program, index) => {
                            return(
                                <div className="pg_card" key={index}>
                                    <NavLink className="news_wrap" 
                                        to="/programDetail"
                                        state={{ detail: program }}
                                    >
                                        <div className="img">
                                            <img src={program.image} alt="" />
                                        </div>

                                        <div className="text">
                                            <h3>{program.title}</h3>
                                            <p>
                                                {program.text}
                                            </p>

                                            <div className="read_more">
                                                <h6>Read More</h6>
                                            </div>
                                        </div>

                                        
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
  )
}

export default Programs