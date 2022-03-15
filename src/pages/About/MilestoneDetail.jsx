import React from 'react'

import { useLocation } from 'react-router-dom'
import BannerHalf from '../../components/Banner/BannerHalf'
import ScrollTop from '../../components/ScrollTop'

const MilestoneDetail = () => {

    const location = useLocation()
    const  {detail}  = location.state
    

    return (
        <>
            <ScrollTop />
            
            <BannerHalf 
                image=  { `url('${detail.image}')`}
                subtitle= {`Milestone | ${detail.date}`} 
                title= {detail.title}

            />

            <section className="ms_content">
                <article dangerouslySetInnerHTML={{ __html: detail.content }} ></article>
            </section>

        </>
    )
}

export default MilestoneDetail