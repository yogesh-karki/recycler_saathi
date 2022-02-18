import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const Programs = () => {
    const swiperRef = React.useRef(null);

    const programData = [
        {
            title: 'Waste Smart School',
            subtitle: 'Creating an alliance of young students to take lead in actions for the environment',
            image: "./images/program_school.jpg"
        },
        {
            title:"Waste Smart Museum",
            subtitle: 'A techno-centric and modern approach towards waste management in national parks',
            image: "./images/program_museaum.jpg"
        },

        {
            title:"Hamro Cycle Yatra",
            subtitle: 'An effort dedicated to the contributions and sacrifices of waste workers',
            image: "./images/program_cycle_yatra.jpg"
        },

    ]

    return (
    <section className="programs">
        <div className="container">
            <div className="program_head">
                <h3>Our <strong>Programs</strong></h3>
                <p>Recycler Saathi, initiated in 2019 and aligns with the vision of The Coca-Cola Foundation’s ‘World Without Waste’.</p>
            </div>
        </div>

        <div className="program_slide">
            
            <Swiper
                ref={swiperRef}
                spaceBetween={50}
                slidesPerView={1.8}
                centeredSlides={true}
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="programs_slider"
            
                >
                <div id="previousButton" className='slideNav' onClick={() => swiperRef.current.swiper.slidePrev()} ><ArrowLeftOutlined /></div>
                <div id="nextButton" className='slideNav' onClick={() => swiperRef.current.swiper.slideNext()} > <ArrowRightOutlined /></div>
                {
                    programData.map((val,index) => {
                        return(
                            <SwiperSlide className='item' key={index}>
                                <div className="text">
                                    <h4>{val.title }</h4>
                                    <p>{val.subtitle}</p>
                                </div>
                                <div className="img">
                                    <img src={val.image} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

                

            
            
            </Swiper>
        </div>
        
    </section>
  )
}

export default Programs