import React from 'react'
import {  NavLink } from 'react-router-dom';

import './news.scss'

import Banner from '../../components/Banner/Banner';
import NewsData from './NewsData';
import BannerHalf from '../../components/Banner/BannerHalf';

const data = NewsData

export const News = () => {

 
  return (
    <>
        <BannerHalf 
            image="url(./images/cover.png)" 
        
            title="<h3><strong>Updates</strong> </h3>" 

        />

        <section className="news">
            <div className="container">
                <div className="wrap">
                    {
                        data.map((val,index) => {
                            return(
                                <div className="news_card" key={index}>
                                    <NavLink className="news_wrap" 
                                        to="/newsDetail"
                                        state={{ detail: val }}
                                    >
                                        <figure>
                                            <img src={val.img} alt="" />
                                        </figure>

                                        <div className="detail">
                                            <h4>{val.title}</h4>
                                            <h5>{val.date}</h5>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

    


    </>

  )
}
