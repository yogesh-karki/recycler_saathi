import React from 'react'
import { useLocation } from 'react-router-dom'
import ScrollTop from '../../components/ScrollTop'


import './news.scss'



const NewsDetail = () => {

  const location = useLocation()
  const  {detail}  = location.state


  return (
    <>
      <ScrollTop />

      <section className="news_detail">
        <div className="wrap">
          <div className="nd_head">
            <h4>{detail.title}  </h4>
            <p>{detail.date} </p>
          </div>

          <div className="nd_figure">
            <img src={detail.img} alt="" />
          </div>

          <div className="nd_text">
            <article dangerouslySetInnerHTML={{ __html: detail.description }} ></article>
          </div>
           
        </div>
      </section>
    </>

  )
}

export default NewsDetail