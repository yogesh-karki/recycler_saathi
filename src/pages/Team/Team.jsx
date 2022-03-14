import React from 'react'
import BannerHalf from '../../components/Banner/BannerHalf'


import './team.scss'

const teamData = [
    {
        name: 'Aanand Mishra',
        img: 'images/team/Aanand Mishra.jpg',
        post: 'Founder & President'
    },
    {
        name: 'Sujata Koirala',
        img: 'images/team/Sujata Koirala.png',
        post: 'Environment & Sustanability Manager'
    },
    {
        name: 'Pratik Bajracharya',
        img: 'images/team/Pratik Bajracharya.png',
        post: 'Research & Knowledge Management Officer'
    },
    {
        name: 'Shyam Subedi',
        img: 'images/team/Shyam Subedi.png',
        post: 'Finance & Administrative Officer'
    },
    {
        name: 'Rammaya Shrestha',
        img: 'images/team/Rammaya Shrestha.jpg',
        post: 'Community Outreach Officer'
    },
    {
        name: 'Abish Man Shakya',
        img: 'images/team/Abish Man Shakya.png',
        post: 'VFC Program Coordinator'
    },
    {
        name: 'Thinley Doma Ghale',
        img: 'images/team/Thinley Doma Ghale.jpg',
        post: 'Program Development & Communication Intern'
    },
    {
        name: 'Sushila Shrestha',
        img: 'images/team/Sushila Shrestha.jpg',
        post: 'Program Intern'
    },
    {
        name: 'Monica Khadka',
        img: 'images/team/Monica Khadka.jpg',
        post: 'Program Intern'
    },
    {
        name: 'Rajdev Khang',
        img: 'images/team/Rajdev Khang.png',
        post: 'Recycling Assistant'
    },
    {
        name: 'Rajendra Shrestha',
        img: 'images/team/Rajendra Shrestha.png',
        post: 'Recycling Assistant'
    },
    {
        name: 'Binay Kumar Khang',
        img: 'images/team/Binay Kumar Khang.png',
        post: 'Recycling Assistant'
    },


]

const Team = () => {
  return (
    <>

        <BannerHalf 
            image="url(./images/team/team_banner.jpg)" 
            // subtitle="About Us" 
            // title="<h3><strong>our team</strong> </h3>" 

        />

        <section className="team">
            <div className="container">
                <div className="wrap">
                    {
                        teamData.map((val) => {
                            return(
                                <div className="team_card" key={val.name}>
                                    <div className="tc_wrap">
                                        <figure>
                                            <img src={val.img} alt="" />
                                        </figure>

                                        <div className="detail">
                                            <h4>{val.name}</h4>
                                            <h5>{val.post}</h5>
                                        </div>
                                    </div>
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

export default Team