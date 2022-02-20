import React, {useEffect} from 'react'
import './about.scss'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Programs from './Programs';
import Objective from '../../components/Objective';
import BannerSvg from './BannerSvg';


gsap.registerPlugin(ScrollTrigger); 






const About = () => {


  return (
    <>
        <section className="abt-banner">
            <div className="container">
                <div className="text">
                    <h2>Establish a <strong>self-sustainable recycling enterprise</strong> in Nepal</h2>
                </div>

                <BannerSvg />
            </div>
        </section>

        <Objective />

        {/* <section className="impact_slider">
          <ImapctSlider />
        </section> */}

        <Programs />
    </>
  )
}

export default About