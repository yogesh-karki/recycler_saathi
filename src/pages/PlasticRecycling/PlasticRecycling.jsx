import React,{useEffect} from 'react'
import './style.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";

import gsap from "gsap";


const PlasticRecycling = () => {
    useEffect(() => {


        const stepAnim = gsap.timeline()

        stepAnim
            .from('.steps_slider figure img', {scale: 0.5,opacity: 0,y: 50})
            .from('.steps_slider .text',{opacity: 0, scale: 0.9, y: 20})
    })

      const stepData = [
          {
            img: './images/collection.svg',
            text: '<p> The network of local vendors, waste pickers, scrap dealers, and balers collects the PET bottle waste and transports it to the regional office in Bharatpur , Chitwan. This networking and partnership have helped strengthen recovery strategy, regulate a fair pricing system and secure a continuous supply of scrap PET bottles within the Recycler Saathi ecosystem. </p>'
          },
          {
              img: './images/sorting.svg',
              text: '<p>The collected plastic waste is sorted and any plastics, other than PET, are removed. </p>'
          },
          {
              img: './images/bailing.svg',
              text: '<p>A baling machine is present on the site which bales the PET waste. Baling is an important process in recycling that compresses the plastic waste into a block (bale) which is secured by plastic or wire wrapping. It is fundamental as </p> <ul><li>It helps to reduce the volume of the plastic waste. </li> <li>It reduces transportation/waste disposal costs.  </li> <li>It facilitates turning waste into a revenue-generating product. </li> </ul> '
          },
          {
              img: './images/transport.svg',
              text: '<p> The collected and baled plastic waste are then transported to our partner facilities, where the plastics are cleaned and granulated. The granules are then used to make different plastic products.</p> <p>With this, Recycler Saathi, helps to divert the plastic waste from the landfills and contributes to the Zero Carbon vision of Nepal by 2030.  </p>'
          }
      ]

      const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    
        },
  };

  const changeSlider = () => {
      console.log("changed")
  }

      

  return (
    <>
        <section className="pl_banner">
            <div className="container">
                <div className="text">
                    <h2>Plastic waste is <strong>not a waste, it’s a RESOURCE</strong> </h2>
                </div>

                <figure>
                    <img src="./images/new_plastic_recovery.svg" alt="" />
                </figure>
            </div>
        </section>

        <section className="pl_desc">
            <div className="container">
                <p>
                    Plastic, also known as polymer, is one of the most demanded and widely accepted products in today’s world.  It is one of human’s best inventions but the problem is, it is produced too many, at too little time and hence, its waste has just been piling up.  
                </p>

                <p>
                    In Nepal, plastics account for almost 15% of the total waste generated. Accumulation of plastic debris has been choking our rivers, polluting our environment, and overwhelming our landfills. The unfortunate part about plastic waste disposal in Nepal is that it is mostly thrown into landfills along with other waste or is discarded in the open environment.
                </p>

                <p>
                Due to its non-biodegradable nature, plastics in landfills break down into smaller pieces, called microplastics. Plastics in open environments cause land, air, and water pollution. When incinerated, plastics release harmful dioxins, furans, mercury, and polychlorinated biphenyls into the atmosphere. Hence, the current waste management scenario of Nepal demands a holistic and robust approach to the plastic waste problem.  
                </p>   

            </div>
        </section>

        <section className="steps">
            <div className="container">
                <div className="steps_head">
                    <h3><strong>Recycling</strong> Steps</h3>
                </div>

                <Swiper
                    slidesPerView={1}
                    className="steps_slider"
                    pagination={pagination}
                    modules={[Pagination]}
                    onChange= {()=> console.log("change")}
                >
                
                    {
                        stepData.map((val, index) => {
                            return(
                                <SwiperSlide className='item' key={index}>
                                    <figure>
                                        <img src={val.img} alt="" />
                                    </figure>
                                    <div className="text">
                                        <article dangerouslySetInnerHTML={{ __html: val.text }} ></article>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                   
           
                
                </Swiper>
            </div>
        </section>
    </>
  )
}

export default PlasticRecycling