import React from 'react'

import { useLocation } from 'react-router-dom'
import ScrollTop from '../../components/ScrollTop'
import BannerHalf from '../../components/Banner/BannerHalf'

const ProgramDetail = () => {
    const location = useLocation()
    const  {detail}  = location.state

    return (
        <>
            <ScrollTop />

            <BannerHalf 
                image=  { `url('${detail.image}')`}
                subtitle= {`Our Programs`} 
                title= {detail.title}

            />


            <section className="ms_content">
                <p>
                    {detail.text}
                </p>

                {
                    detail.description.map((val,index) => {
                        return(
                            <div className="description" key={index}>
                                <h5>{val.title}</h5>
                                <p>{val.text}</p>
                            </div>
                        )
                    })
                }

                <div className="description">
                    <h5>{}</h5>
                </div>
            </section>
        </>
    )
}

export default ProgramDetail