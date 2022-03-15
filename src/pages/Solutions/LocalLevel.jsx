import React,{useEffect, useRef} from 'react'
import './solution.scss'

import BannerHalf from '../../components/Banner/BannerHalf'
import ScrollTop from '../../components/ScrollTop'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 


const localData = [
    {
        title: 'individual’s role ',
        text: `
                <p>
                The world’s biggest government, corporates, and organizations are all trying to solve the plastic problem. But is there anything that an individual can do on a personal level to end plastic pollution? The world bank in 2018 shares how an individual can contribute to fighting plastic pollution all around the globe. 
                </p>

                <p>
                In an article published in their blog, they suggested steps such as to refuse plastic bags and instead choose a reusable bag, bottle our own water by using a recyclable bottle, skip plastic straws and use metal, paper, or bamboo straws, avoid plastic cutlery, and choose products with less plastic packaging. Similarly, it suggested that we move away from throwaway culture, products containing Microbeads, and clothes that have Synthetic Microfibers. 
                </p>
            `,
        testimonial: [
            {   
                image: "./images/sarah.png",
                name: 'Sarah Ferguson, South Africa ',
                text: `
                        <p>
                            One man can change the world”. With this idea, there are many examples of individuals who have single handedly influenced policy makers to announce a ban or discontinuation of a certain plastic type in their community. Similarly, ordinary individuals have gone out to make extraordinary impacts to lead the fight against plastic pollution.
                        </p>

                        <p>
                            Following are some examples of individuals from South Africa to Nepal, who are all trying to clean up the planet. 
                        </p>
                    `
            },
            {
                image: "./images/james.jpg",
                name: 'James Wakibia, Kenya  ',
                text: `
                        <p>
                        In response to the growing plastic waste piling up in the bodies of water in Nakura, Kenya, James began to campaign by writing letters, visiting officials, posting on social media and calling on the government to take effective action.   
                        </p>

                        <p>
                        He extensively used photography to convey the scale of the plastic problem in the country. His initiative got noticed by the politicians in Kenya which eventually led to a complete ban on single-use plastic bags in 2017.
                        </p>
                        `
            },
            {
                name: 'Radhika Pariyar, Nepal ',
                text: `
                        <p>
                            Radhika Pariyar, a waste worker has been working at a recollection center for recyclable waste such as plastics, papers, and metals in Kathmandu, Nepal. She manually goes through the municipal, medical, and other waste to segregate them into recyclables and non-recyclables. Her work is dangerous, over-demanding, and low paying, however without individuals like Radhika Pariyar, our community would be completely unsanitary to live in. Moreover, there would be no space for our garbage anymore.
                        </p>
                    `
            },
        ]
    },
    {
        title: 'company’s role   ',
        text: `
                <p>
                In September 24, 2019, the World Economic Forum informed us that 300 million Tonnes of plastic waste were generated every year out of which 8 million Tonnes of plastic waste flow into the ocean annually, and remain mismanaged on land; all because of the lack of capacity, infrastructure, and collective willpower needed to sustainably manage it. Global companies such as Coca-Cola, PepsiCo, Dow, and Nestlé are all working towards solving the global plastic pollution problem of which they are all the biggest contributors. Coca-Cola aims to adopt 100% recycling packaging by 2025 and Dow aims to reduce total global plastic leakage by 45% by financing waste management initiatives.  
                </p>

                <p>
                With the undeniable consequences of plastic such as deaths of more than 300 marine animals in Thailand in 2018 (after ingesting plastics), producers of plastics as well as the businesses that use them are trying to phase out single-use plastics, use more recycled plastic in their packaging, and work on more effective recycling. The following are two examples of companies around the globe who are setting plastic reduction goals, and transitioning to recyclable, reusable, and compostable packaging.  
                </p>
            `,
        testimonial: [
            {
                image: "./images/coco_cola.png",
                name: 'The Coca-Cola Company, United States of America  ',
                text: `
                        <p>
                        It is estimated that Coca-Cola uses 120 billion bottles a year. After publishing the report in 2015, Coca-Cola launched their World Without Waste campaign in 2018 to help collect and recycle a bottle or can for every one sold by 2030. Coca-Cola has also been working towards making their packaging 100% recyclable by 2025 and using 50% recycled material in their bottles and cans by 2030. In collaboration with their Tech partners, Coca-Cola also created a bottle prototype (excluding the cap and label) made from 100% plant-based sources.    
                        </p>

                        <p>
                        The company is working towards making all of its packaging sustainable by maximizing the use of recycled and renewable content while minimizing their use of virgin, fossil material. They aim to significantly reduce their carbon footprint, reliance on ‘virgin’ fossil fuels, and boost collection of PET in support of a circular economy.      
                        </p>
                    `
            },
            {
                image: "./images/coco_cola_nepal.png",
                name: 'Bottlers Nepal Limited, Coca-Cola Nepal',
                text: `
                        <p>
                        Bottlers Nepal Limited, in association with its Parent Company, The Coca-Cola Company, USA initiated Nepal’s first environment friendly PET bottle recollection initiative in Kathmandu and Chitwan. This initiative titled ‘PET Bottle Recycling Social Enterprise” aims to contribute to a cleaner environment by efficiently collecting and disposing of used PET bottles in Kathmandu, Nepal. The company has also been working with various Environment and Sustainability NGOs in Nepal to achieve the World Without Waste vision. They have been contributing to the overall sustainable development of the Waste Management Sector of Nepal. This is achieved through creating a self-sustainable recycling enterprise, sustainable development of the waste workers involved in waste management, and educating and engaging the community about various environment and sustainability issues such as recycling.   
                        </p>
                        `
            }
        ]
    },
    {
        title: 'Waste Management Companies',
        text: `
                <p>
                    The best definition of waste management is the proper collection, transportation, treatment and disposal of garbage sewage, and other waste products and substances safely and efficiently. The global waste management market size is expected to reach $484.9 billion by 2025, rising at a compound annual growth rate of 6.0% from 2018 to 2025.  
                </p>

                <p>
                    Globally, waste generation is increasing at an alarming rate but there is an inadequate number of systems in place to manage the changing waste composition of citizens. According to the World Bank Group in 2018, upper-middle countries have almost 100% percent of its waste collected and more than one-third of the collected waste is recovered through recycling and composting. Whereas, in the low-income countries only 48% of waste is collected from the cities and 26% of waste is collected from rural areas. Only 4% is recycled.  
                </p>

                <p>
                    Solid waste management and its overall development is critical to averse from the path of more waste and overwhelming pollution. Through waste data, critical solid waste management financing, policy, and planning decisions are key as well as developing state-of-the art-waste management systems and creating comprehensive waste reduction and recycling programs. The following are a few examples of waste management companies from all around the world doing their bit in fighting the plastic problem:  
                </p>

                <p> 
                    The waste management market is segmented based on waste type, service and region. These companies strive to provide innovative solutions to the pressing and challenging dilemmas in managing waste materials. Just like any other industry in the world, they strive to have the highest consumer trust rates with their services. The following are two top waste management companies in the world fighting global waste pollution on our planet 
                </p>
            `,
        testimonial: [
            {
                image: "./images/hitz.png",
                name: 'Hitachi Zosen Corporation  ',
                text: `
                        <p>
                            This major industrial and engineering corporation based in Japan is committed to achieving the SDGs and are supplying renewable energy, addressing water shortages, preventing environmental degradation from industrial development, resolving food safety, food loss, and other food issues, creating strong communities, and protecting lives from natural disasters. Additionally, it addresses sustainability efforts through diversity management at workplace, work style reforms and providing environmental education to high school and college students in Japan and Laos.    
                        </p>

                        <p>
                            The corporation produces water treatment systems, biomass utilization technologies, environmental protection systems, prime movers/press machinery, power generation facilities/New Energy, Marine Civil Engineering, Construction machinery, etc.      
                        </p>
                    `
            },
            {
                image: "./images/waste_magement_inc.png",
                name: 'Waste Management Inc  ',
                text: `
                        <p>
                            Waste Management Inc. provides integrated environmental solutions, single-stream recycling, e-cycling, renewable energy, recycling, waste conversion, etc. It is an industry based in the United States of America helping people and organizations achieve their sustainability goals. They focus on maximizing resource value while minimizing environmental impact and are guided by their three values; customers, safety, and environment.
                        </p>

                        <p>
                            Waste Management Inc. continues its investment in building new recycling facilities, increasing production and use of renewable natural gas and developing new technologies that provide alternatives to landfill disposal. They aim to grow their sustainability-focused services by reducing their carbon-emissions, helping customers meet their sustainability goals and unlocking new solutions.  
                        </p>
                        `
            },
        ]
    },
    {
        title: 'individuals in Science and Technology',
        text: `
                <p>
                    It is estimated that only 14% of global plastic packaging is collected for recycling. Consequently, new virgin plastics have to be produced to meet demand which results in 20% increase of global oil production by 2050, significantly increasing carbon emissions. Waste management includes a variety of interventions in the generation, prevention, characterization, monitoring, treatment, handling, reuse, and disposal of solid wastes. Following is the list of    
                </p>

              
            `,
        testimonial: [
            {
                image: "./images/mura_tech.png",
                name: 'Mura Technology (Catalytic Hydrothermal Reactor)',
                text: `
                        <p>
                        Mura Technology aims to operate with around 1,000,000 tonnes of annual plastic waste by 2025 by introducing solutions for all types of plastic waste. Mura’s proprietary technology, HydroPRS™ is an advanced recycling process that converts end-of-life plastics back into the chemical and oils from which they were made, for used in the petrochemical industry in the production of new plastic and other materials. The process utilizes the Cat-HTR™ technology at its core, developed by Licella Holdings Pty.     
                        </p>

                    `
            },
            {
                
                image: "./images/swachh_bharat.png",
                name: 'Swachh Bharat Mission or Clean India Mission ',
                text: `
                        <p>
                        The Clean India Mission is a program of the Government of India initiated in 2015 that aims to use and develop sustainable technologies for recycling and waste management, incorporating small and medium scale enterprises, and establishing techno-economic feasibility of proposed methodologies/technologies. It focuses on developing in the area of recycling and recovery of E-Waste, management of industrial hazardous and non-hazardous wastes, developing newer technologies for biomedical waste, and managing urban and rural solid waste including plastic waste.    
                        </p>

                        `
            },
        ]
    },
]

const LocalLevel = () => {
    const headerRefs = useRef([])
    headerRefs.current = [];

    const addToRefs = el => {
        if(el && !headerRefs.current.includes(el)){
            headerRefs.current.push(el)
        }
    };

 

    useEffect(() => {
        headerRefs.current.forEach((el, index) => {
            const head = el.querySelector('.head')
            ScrollTrigger.refresh();
            gsap.to(head, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top top',
                    pin: head,
                    end: 'bottom center',
                }
            })   
        })

        

    })

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">'  + "</span>";
        },
    };

  return (
    <>
        <ScrollTop />

        <BannerHalf 
            image='url(./images/national_problem.jpg)'
            subtitle="Solutions"
            title="<h3>Local Level <strong> Intervention</strong> </h3>"
        />

        <section className="local_solution">
            {
                localData.map((val,index)=> {
                    return(
                        <div className="sol_card" key={index} ref={addToRefs}>
                            <div className="container">
                                <div className="card_wrap">
                                    <div className="head">
                                        <h3>{val.title}</h3>
                                    </div>

                                    <div className="content">
                                        <article dangerouslySetInnerHTML={{ __html: val.text }}></article>

                                        <div className="testimonial">
                                        <Swiper 
                                            slidesPerView={1}
                                            navigation={false}  
                                            className="testimonial_slides"
                                            pagination={pagination}
                                            modules={[Pagination]}
                                        >
                                         {
                                             val.testimonial.map((test, index) => {
                                                return(
                                                    <SwiperSlide key={index} className="item">
                                                        <div className="img">
                                                            {
                                                                test.image ?  <img src={test.image} alt="" /> :<img src="./images/logo.png" alt="" /> 
                                                            }
                                                            {/* <img src={test.image} alt="" /> */}
                                                            <h5>{test.name}</h5>
                                                        </div>
                                                        <div className="test_text">
                                                            <article dangerouslySetInnerHTML={{ __html: test.text }}></article>
                                                            
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                             })
                                         }

                                        </Swiper>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    </>
  )
}

export default LocalLevel