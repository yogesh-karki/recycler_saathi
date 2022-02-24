import React from 'react'
import './banner.scss'

const Banner = ({colorTheme, height,title,figure,subtitle}) => {
  return (
    <>
        <section className={`inner_banner ${colorTheme} ${height} `} >
            <div className="container">
                <div className="text">
                    <span>{subtitle}</span>
                    <article dangerouslySetInnerHTML={{ __html: title }} ></article>
                </div>

                <div className="figure">
                    {figure}
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner