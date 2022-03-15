import React,{useState, useEffect} from 'react'
import {  NavLink } from 'react-router-dom';

import MilestoneData from './MilestoneData'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Milestone = () => {


    const [activeData , setActiveData ] = useState({
        title: MilestoneData[0].presentation[0].title,
        image: MilestoneData[0].presentation[0].image,
        content: MilestoneData[0].presentation[0].content,
        data: MilestoneData[0].presentation[0]
        
    })

    useEffect(() => {
        gsap.to(".milestone_sticky", {
            scrollTrigger: {
                trigger: ".milestone",
                start: 'top top',
                pin: ".milestone_sticky",
                end: 'bottom center+=15%',
            }
        })  
    })

    const dataSetter = (list ,index) => {
        setActiveData({
            title: list.title,
            image: list.image,
            content: list.content,
            data: list
        })
    }

    return (
        <section className="milestone">
            <figure className='milestone_figure'>
                <img src={activeData.image} alt="" />
            </figure>

            <div className="milestone_content">
                <div className="container">
                    <div className="milestone_wrap">
                        <div className="milestone_scroller">
                            <div className="milestone_head">
                                <h3>Milestones</h3>
                                <p>By systematically eliminating technical risks through rapid iterations, we aim to reach full-scale deployment in both rivers and oceans. Our ultimate goal is to clean up 90% of the world’s floating ocean plastic by 2040.</p>
                            </div>

                            <div className="milestone_listing">
                                {
                                    MilestoneData.map((val ,index) => {
                                        return(
                                            <div className="list_single " key={index}>
                                                
                                                <h4>{val.title}</h4>

                                                <ul>
                                                    {
                                                        val.presentation.map((list, index) => {
                                                            return(
                                                                
                                                                <li key={index} className={`${activeData.title === list.title ? "active" : ""} `} onClick={ (e) => dataSetter (list, index)  }>
                                                                    <p>{list.date}</p>
                                                                    <h5>{list.title}</h5>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>


                        
                        </div>

                        <div className="milestone_sticky">
                            <h3>
                                {activeData.title}
                            </h3>

                            <article dangerouslySetInnerHTML={{ __html: activeData.content }} ></article>

                            <NavLink 
                                to="/milestone-detail"
                                state={{ detail: activeData.data }}
                            >
                                Read More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Milestone