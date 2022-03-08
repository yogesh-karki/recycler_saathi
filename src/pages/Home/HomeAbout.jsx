import React,{useEffect}  from 'react'


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import NepalMap from './NepalMap';

gsap.registerPlugin(ScrollTrigger); 



const HomeAbout = () => {
    useEffect(()=> {
      

      if(window.innerWidth > 500) {
        ScrollTrigger.create({
          trigger: '.abt .image',
          start: 'top top+=5%',
          pin: '.abt .image .animate_svg',
          endTrigger:'.abt .wrap .textcard',
          end: 'bottom center+=30%',       
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
                    The changing scenario of waste composition is a major issue for the management of Municipal Solid Waste (MSW) in Nepal. This problem persists more in the rapidly urbanizing areas of our country such as Kathmandu, Pokhara, and Biratnagar. However, all parts of our country need equal attention regarding their Municipal Solid Waste (MSW).
                    </p>

                    <p>
                    On average the composition of waste is 60% decomposable and 25% recyclables such as plastics, papers, and metals. A recent study conducted shows plastic to account for 15% of all waste generated in Nepal in 2020. 
                    </p>
                </div>

                <div className="text">
                  <h3><strong>We aim to recycle</strong> all the plastic waste in Nepal  </h3>
                  <p>
                    Recycler Saathi is a recollection and recycling enterprise established in 2019 to target waste PET bottles in Nepal. We have an annual recollection and recycling capacity of 2400 tons to divert the waste PET bottles from landfills, rivers, and other areas. The broader goal of Recycler Saathi is to address the problems of all kinds of plastics in Nepal by creating a circular economy model.   
                  </p>

                  <p>
                  Recycler Saathi purchases waste PET bottles from small and big waste centres of the region at a fair price, gets it baled in the baling unit inside the centre and sends for recycling purpose to our recycling partner industry in Nawalparasi. 
                  </p>
                </div>
              </div>

              <div className="image">
                  {/* <img src="./images/recyclesaathi.svg" alt="" /> */}
                  <div className="animate_svg">
                    {/* <BannerSvg /> */}
                    <NepalMap />
                  </div>
              </div>
            </div>
          </div>
      </section>

      
    </>
  )
}

export default HomeAbout