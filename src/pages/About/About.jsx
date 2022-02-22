import React, {useEffect} from 'react'
import './about.scss'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Programs from './Programs';
import Objective from '../../components/Objective';
import BannerSvg from './BannerSvg';
import Banner from '../../components/Banner/Banner';


gsap.registerPlugin(ScrollTrigger); 






const About = () => {
  

  return (
    <>
        <Banner 
          colorTheme={'light'}
          title={'<h2>Establish a <strong>self-sustainable recycling enterprise </strong> in Nepal </h2>'}
          figure={<BannerSvg />}
        />

  
        <div className="abt_objective">
          <Objective />
        </div>

        <Programs />
    </>
  )
}

export default About