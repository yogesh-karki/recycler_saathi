import React from 'react'
import {  NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";

import { Navigation } from "swiper";
import NewsData from '../News/NewsData';
import { LeftArrow, RightArrow } from '../../components/Arrow';

const HomeNews = () => {
    const swiperRef = React.useRef(null);

  return (

    
    <section className="home_news">
        <div className="container">
            <div className="wrap">
                <div className="news_head">
                    <h3>Our latest <strong>news</strong></h3>

                    <div className="slider_nav">
                        <div id="previousButton" className='slideNav' onClick={() => swiperRef.current.swiper.slidePrev()} ><LeftArrow /></div>
                        <div id="nextButton" className='slideNav' onClick={() => swiperRef.current.swiper.slideNext()} > <RightArrow /></div>
                        
                    </div>
                </div>

                <div className="news_slider">
                    <Swiper 
                        ref={swiperRef}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation={true} 
                        modules={[Navigation]} 
                        className="home_news_slides"
                    >
                        {
                            NewsData.map((val, index) => {
                                return(
                                    <SwiperSlide key={index} className="item">
                                        <NavLink className="news_wrap" 
                                            to="/newsDetail"
                                            state={{ detail: val }}
                                        >
                                            <picture>
                                                <img src={val.img} alt="" />
                                            </picture>

                                            <article>
                                                <p>{val.date}</p>
                                                <h4>{val.title}</h4>
                                            </article>
                                        </NavLink>
                                    </SwiperSlide>
                                )
                            })
                        }

                    
                    </Swiper>
                </div>
            </div>

            <div className="view">
                
            </div>
        </div>
    </section>
  )
}

export default HomeNews