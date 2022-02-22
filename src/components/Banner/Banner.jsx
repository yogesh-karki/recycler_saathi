import React from 'react'
import './banner.scss'

const Banner = ({colorTheme, height,title,figure}) => {
  return (
    <>
        <section className={`inner_banner ${colorTheme} ${height} `} >
            <div className="container">
                <div className="text">
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