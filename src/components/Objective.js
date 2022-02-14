import React,{useEffect} from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 


const data = [
    {
        title: 'Plastic Recovery',
        color: '#8EA604',
        img: './images/plastic_recovery.svg'
    },

    {
        title: 'Strengtheing the key players',
        color: '#D76A03',
        img: './images/strength.svg'
    },
    {
        title: 'Awareness & Advocacy',
        color: '#BF3100',
        img: './images/advocacy.svg'
    },
]

const Objective = () => {
    useEffect(()=> {
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.objectives',
        //         start: 'top center',
        //         toggleActions: 'play reset restart reverse',
        //     }
        // })

        // tl
        //     .to('.objectives',{background: '#002846'})
        //     .to('.impacts', {background: '#002846'}, '<');


        gsap.from('.full_image img',{
            duration: 2,
    
            webkitClipPath: 'inset(15% 15% 15% 15%)',
            clipPath: 'inset(15% 15% 15% 15%)',
            y: -50,

            scrollTrigger : {
                trigger: '.full_image img',
                start: 'top center',
            }
        })
    })

  return (
    <section className="objectives" >
        <div className="objective_head">
            <h3>Our<strong> Objectives</strong> </h3>
            <p>Annually, 15000 tons of waste pet bottles are produced in Nepal out of which only 12000 tons of waste pet bottles are recollected and 10000 tons of them are exported illegally.</p>
        </div>

        <div className="container">
            <div className="wrap">
                {
                    data.map((val, index)=> {
                        return(
                            <div className="card" key={index} style={{backgroundColor:val.color}} >
                                <div className="content">
                                    <h1>0{index+1}</h1>
                                    {/* <img src={val.img} alt="" /> */}
                                    <object type="image/svg+xml" data={val.img} class="svg">0{index+1}</object>
                                    <h2>{val.title} </h2>

                                    <a href="">Explore More</a>
                                </div>
                            </div>
                        )
                    })
                }
            
            </div>
        </div>

        
            <figure className='full_image'>
                <img src="./images/A6.5.1.jpg" alt="" />

                <div className="container">
                    <figcaption>
                    Participants of Hamro Cycle Yatra 2021
                    </figcaption>
                </div>
            </figure>
     

      </section>
  )
}

export default Objective