import React,{useEffect}  from 'react'


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BannerSvg from './BannerSvg';

gsap.registerPlugin(ScrollTrigger); 



const HomeAbout = () => {
    useEffect(()=> {
      

        if(window.innerWidth > 500) {
          ScrollTrigger.create({
            trigger: '.abt .image',
            start: 'top top+=5%',
            pin: '.abt .image .animate_svg',
            endTrigger:'.abt .wrap .textcard',
            end: 'bottom bottom',
          
          })
        }

        
    })

    return (
    <>
        <section className='abt'>
          <div className="container">
            <div className="wrap">
              <div className="textcard">
                <div className="text">
                  <h3><strong>We research and develop the interventions</strong> to tackle the Waste problem in Nepal </h3>
                  <p>
                    With Nepal being a developing country and urbanizing fast, the changing scenario of waste composition is a major issue for the management of Municipal Solid Waste (MSW). A recent study conducted shows plastic to account for 15% of all waste generated in Nepal in 2020.  
                  </p>
                </div>

                <div className="text">
                  <h3><strong>We aim to recycle</strong> all the plastic waste in Nepal  </h3>
                  <p>
                  Recycler Saathi is an enterprise established in 2019 to target the waste PET in Nepal. Now, Recycler Saathi has an annual recollection and recycling capacity of 2400 Tons/Month which has helped the waste PET bottles in landfills, rivers and other areas. Along with this, the broader goal of Recycler Saathi is to address the problems of all kinds of plastics in Nepal by creating a circular economy model. 
                  </p>
                </div>
              </div>

              <div className="image">
                  {/* <img src="./images/recyclesaathi.svg" alt="" /> */}
                  <div className="animate_svg">
                    <BannerSvg />
                  </div>
              </div>
            </div>
          </div>
      </section>

      
    </>
  )
}

export default HomeAbout