import React,{useEffect} from 'react'
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

      gsap.to('.impact_bg',{
        y: -30,
        duration: 5,
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "none"
      })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.impacts',
                start: 'top center',
                toggleActions: 'play reset restart reverse',
            }
        })

        tl
            .fromTo('.impacts',{background: '#223335'},{background: '#22352b'})
            .to('.abt', {background: '#22352b'}, '<');

    })

    return (
        <section className="impacts">
        

            <div className="impact_bg"><img src="./images/impact.svg" alt="" /></div>
            <div className="container">
                <div className="impact_head">
                    <h3><strong>Our Impacts</strong></h3>
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
                        
                            <h2 style={{ color: val.color }} >{val.numbers} <small>{val.unit}</small> </h2>
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