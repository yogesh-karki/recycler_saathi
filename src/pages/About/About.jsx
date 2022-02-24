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

  useEffect(()=> {
    gsap.to('.abt_objective .objectives', {backgroundColor: '#01283c',duration: 0.8,
      scrollTrigger: {
        trigger: '.abt_objective',
        start: 'top center+=5%',
        toggleActions: 'play reset restart reverse',
      }
    })

    gsap.to('.inner_banner', {backgroundColor: '#01283c',duration: 0.8,
      scrollTrigger: {
        trigger: '.abt_objective',
        start: 'top center+=5%',
        toggleActions: 'play reset restart reverse',
      }
    })
  })
  

  return (
    <>
        <Banner 
          colorTheme={'light'}
          subtitle={'About'}
          title={'<h2>Establish a <strong>self-sustainable recycling enterprise  in Nepal</strong> </h2>'}
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