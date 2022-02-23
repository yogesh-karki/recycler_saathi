import React from 'react'
import Banner from '../../components/Banner/Banner'

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


]

const Team = () => {
  return (
    <>

        <Banner 
            colorTheme={'light'}
            height={"smallHeight"}
            title={'<h2><strong>Our Team</strong> </h2>'}
         
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