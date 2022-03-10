import React from 'react'
import './banner.scss'

const BannerHalf = ({image, subtitle, title}) => {
    console.log(image)

  return (
    <section className='banner banner_half' style={{background: image }}>
        <div className="container">
            <div className="text">
                <h6>{subtitle}</h6>
                <article dangerouslySetInnerHTML={{ __html: title }} ></article>
            </div>
        </div>
    </section>
  )
}

export default BannerHalf