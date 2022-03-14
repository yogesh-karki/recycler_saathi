import React from 'react'
import './solution.scss'

import BannerHalf from '../../components/Banner/BannerHalf'

const plData = [
    {   
        image: '',
        title: "<h3><strong>Circular Economic Model </strong>: Envisioning a world without waste </h3>",
        content: `
                    <p>
                    The global trend of material consumption is mainly “use and throw’. Products have a very short lifespan and then they are thrown away.  This is also one of the main factors behind the spike in the plastic waste generation rate. To move society away from the “take, make, dispose ” mindset that has long-informed business models, a circular economic model in plastic is required.  
                    </p>

                    <p>
                    A circular economy model in plastics is restorative and regenerative by design. This means plastic materials will constantly flow around a ‘closed loop’ system, rather than being used once and then discarded. Simultaneously, it will help to keep the value of plastics in the economy, without leakage into the natural environment and also ensure that recyclability is kept as a priority and plastic waste is viewed as a resource. 
                    </p>
                `,

    },
    {   
        image: '',
        title: "<h3><strong>EPR</strong>: Extended Producers Responsibility   </h3>",
        content: `  
                    <p>
                    Extended Producer Responsibility (EPR) helps to shift the responsibility of plastic waste management to their respective producers. EPR mechanism holds the producers responsible for the plastic waste generated from their product, after the point of sale. This policy will mainly help to reduce the mismanaged plastic waste in two ways: 
                    </p>

                    <ul>
                        <li>Reducing the burden of municipalities and placing a shared physical and/or financial responsibility for waste management on producers. </li>
                        <li>Providing incentives for manufacturers to design resource efficient and low impact products. </li>
                    </ul>

                    <h6>Case Study</h6>

                    <p>In Germany, the VerpackV established EPR on packaging, prioritizing refillable bottles and introducing a one-way deposit for PET bottles (EUR 0.25); 98.5% of refillable bottles are returned (Zero Waste Europe, 2010) </p>
                

                    
                `,

    },
    {   
        image: '',
        title: "<h3>Plastic waste<strong> as a resource </strong> </h3>  ",
        content: `
                    <p>
                    The lifecycle assessment of plastic material over the other raw materials like metals and glass shows that plastic actually helps to save energy, carbon lives, fuel, water, and food. It is an integral part of our health, transport, and automotive system. Hence, Plastic waste management is the problem rather than the plastic itself.  there is value in plastic waste, if regulated, ed, recycled, and taken advantage of properly.  
                    </p>

                    <p>
                    Various plastic materials are already booming in the global market like plastic to the road, plastic to materials, plastic to fuel, Co-fueling, etc. Using plastic waste as a resource aid in plastic waste management in the following ways: 
                    </p>

                    <ul>
                        <li>Divert plastic waste from the landfill. </li>
                        <li>Extract value from waste. </li>
                        <li>Save municipal waste collection and management costs. </li>
                    </ul>
                `,

    },
]

const PolicyLevel = () => {
  return (
    <>
        <BannerHalf 
            image='url(./images/national_problem.jpg)'
            subtitle="Solutions"
            title="<h3>Policy Level <strong> Intervention</strong> </h3>"
        />

        <div className="pl_solution">
            
                {
                    plData.map((val,index) => {
                        return(
                            <div className="pls_card" key={index}>
                                <div className="container">
                                    <article dangerouslySetInnerHTML={{ __html: val.title }}></article>
                                    <article dangerouslySetInnerHTML={{ __html: val.content }}></article>
                                </div>
                            </div>
                        )
                    })
                }
            
        </div>

        


    </>
  )
}

export default PolicyLevel