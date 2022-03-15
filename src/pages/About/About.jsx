import React from "react";
import "./about.scss";
import ScrollTop from '../../components/ScrollTop'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Objective from "../../components/Objective";

import BannerHalf from "../../components/Banner/BannerHalf";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
   

    return (
        <>
            <ScrollTop />
            <BannerHalf 
                image="url(./images/cover.png)" 
                subtitle="About Us" 
                title="<h3><strong>Recycler Saathi</strong> </h3>" 

            />


            <div className="about_text">
                <div className="container">
                  
                  <div className="text">
                      <h3>
                          PET recollection & <strong>recycling enterprise </strong>
                      </h3>

                      <p>
                          Recycler Saathi, a social enterprise initiated in 2019, is a waste PET recollection and recycling enterprise established with the support of The Coca-Cola Foundation and Bottlers Nepal (Terai) Limited.
                          Currently, Recycler Saathi in alignment with the Coca-Cola Foundation’s “World Without Waste” vision aims to create a self-sustainable waste PET bottle recycling mechanism in Nepal. Our recovery, recollection
                          and baling centers are based in three provinces of Nepal
                      </p>

                      <p>
                          As we continue to contribute to PET bottle recycling and carbon emission reduction, we are working towards improving the conditions of the waste workers through various interventions such as Occupational
                          Safety Training, Insurance to the waste workers, Health Camps, Legal advices and Awareness campaigns in collaboration and partnership with relevant stakeholders such as the government, corporations,
                          educational institutions, and local communities.
                      </p>
                  </div>

                      
            
                </div>
            </div>

            <div className="mvv">
                <div className="container">
                    <div className="wrap">
                        <div className="text">
                            <div className="card">
                                <h3><strong>Vision</strong></h3>
                                <p>To make Nepal carbon-negative, zero waste, and clean. </p>
                            </div>

                            <div className="card">
                                <h3><strong>Mission Statement</strong></h3>
                                <p>
                                    To continuously work for the development of the overall waste management sector in partnership and support of all relevant stakeholders such as the government, corporations, organizations, and the local
                                    community. 
                                </p>
                            </div>

                            <div className="card">
                                <h3><strong>Goals</strong></h3>
                                <p>To recycle all plastic waste, reduce global carbon emissions, and contribute to the sustainable development of the people of Nepal.  </p>
                            </div>
                        </div>

                        <div className="img">
                            <Swiper effect={"cards"}  grabCursor={true} modules={[EffectCards]} className="mySwiper">
                                <SwiperSlide>
                                    <img src="./images/abt-image.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./images/A6.5.1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./images/key_players.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abt_objective">
                <Objective />
            </div>

            <div className="sdg_goals">
                <div className="container">
                    <h3>
                        <strong>OUR CONTRIBUTION TO</strong> SUSTAINABLE DEVELOPMENT GOALS{" "}
                    </h3>

                    <div className="img">
                        <img src="./images/sdg/1.png" alt="" />
                        <img src="./images/sdg/2.png" alt="" />
                        <img src="./images/sdg/3.png" alt="" />
                        <img src="./images/sdg/4.png" alt="" />
                        <img src="./images/sdg/8.png" alt="" />
                        <img src="./images/sdg/10.png" alt="" />
                        <img src="./images/sdg/12.png" alt="" />
                        <img src="./images/sdg/13.png" alt="" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default About;
