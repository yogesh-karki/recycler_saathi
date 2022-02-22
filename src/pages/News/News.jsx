import React from 'react'

import './news.scss'

import Banner from '../../components/Banner/Banner';

const newsData = [
    {
        title: 'Occupational Safety Training and Health Campaign in Pepsicola',
        img: './images/news1.jpg',
        date: '02/22/2022'
    },
    {
        title: 'How green are you? 2022',
        img: './images/news2.jpg',
        date: '02/19/2022'
    },
    {
        title: 'Reducing 60,583 kg of carbon emissions',
        img: './images/news3.jpg',
        date: '02/18/2022'
    },
    {
        title: 'Waste Smart School, Starting them young',
        img: './images/news4.jpg',
        date: '02/15/2022'
    },
]

export const News = () => {

 
  return (
    <>
        <Banner 
            colorTheme={'light'}
            height={"smallHeight"}
            title={'<h2><strong>News</strong> </h2>'}
         
        />

        <section className="news">
            <div className="container">
                <div className="wrap">
                    {
                        newsData.map((val,index) => {
                            return(
                                <div className="news_card" key={index}>
                                    <address className="news_wrap">
                                        <figure>
                                            <img src={val.img} alt="" />
                                        </figure>

                                        <div className="detail">
                                            <h4>{val.title}</h4>
                                            <h5>{val.date}</h5>
                                        </div>
                                    </address>
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
