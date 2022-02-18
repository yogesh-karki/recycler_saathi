import React,{useEffect} from 'react'

import NepalMap from './NepalMap' ;

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger); 

const OurImpacts = () => {
    const impactData = [
    
        {
          title: 'Waste PET collected for recycling',
          numbers: '3113 ',
          unit: 'tons',
          icon:'./images/icons/bottles.svg',
          color: '#669324'
        },

     
    
        {
          title: 'Carbon Emission Controlled',
          numbers: '4669.5',
          unit: 'tons',
          icon:'./images/icons/carbon_emission.svg',
          color: '#4770bf'
        },
        {
          title: 'Children Engaged',
          numbers: '7000',
          unit: '+',
          icon: './images/icons/children.svg',
          color: '#f59200'
        },

       
        {
          title: 'Youth Engaged',
          numbers: '20,000',
          unit: '+',
          icon: './images/icons/youth.svg',
          color: '#de402a'
        },
        {
          title: 'Districts Reached',
          numbers: '15',
          unit: '',
          icon: './images/icons/districts.svg',
          color: '#facd86'
        },

        {
            title: 'Government Officers Trained',
            numbers: '70',
            unit: '+',
            icon: './images/icons/goverment_official.svg',
            color: '#a02f97'
        },
       
        {
          title: 'Waste Smart Schools',
          numbers: '15',
          unit: '',
          icon: './images/icons/school.svg',
          color: '#c66622'
        },
        
        
      ]
    
    useEffect(()=> {
      ScrollTrigger.create({
        trigger: '.impacts',
        start: 'top top+=10%',
        pin: '.map_bg',
        end: 'bottom top',
        duration: 0.8
   
      })

      gsap.to('.map_bg', {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.impacts',
          start: 'top top+=10%',
          toggleActions: 'play reset restart reverse',
          end: 'bottom center',
        
        }
      })

      gsap.to('.map_bg', {
        y: -40,
        scrollTrigger: {
          trigger: '.impacts',
          start: 'center+=20% center-=5%',
          scrub: 2,
        }
      })


    })

    return (
        <section className="impacts">
            <div className="map_bg">
              <NepalMap />
            </div>
            <div className="container">
                <div className="impact_head">
                    <h3>Our <strong>Impacts</strong></h3>
                    <p>Recycler Saathi has an annual recollection and recycling capacity of 2400 Tons/Month which has helped the waste PET bottles in landfills, rivers and other areas.</p>
                </div>
            </div>

            <div className="container_big">
                <div className="impact-nums">
                    
                    {
                    impactData.map((val, index) => {
                        return(
                        <div className='icard' key={index}>
                            <div className="icon">
                                <img src={val.icon} alt="" />
                                {/* {val.icon} */}
                            </div>
                        
                            <h2 >{val.numbers} <small>{val.unit}</small> </h2>
                            <p>{val.title}</p>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        </section>
  )
}

export default OurImpacts