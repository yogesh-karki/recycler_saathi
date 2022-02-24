import React,{useEffect} from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const BannerSvg = () => {
    useEffect(() => {
        const aboutBox = document.querySelector('.abt_banner_svg');
  
        const earth = aboutBox.querySelector('.abt_banner_svg .earth')
        const water = aboutBox.querySelector('.abt_banner_svg .water')
        const leaf = aboutBox.querySelector('.abt_banner_svg .leaf')
   
        gsap.to(earth, {x:20,duration: 3,repeat: -1,yoyo: true,ease: "none"})
        gsap.to(water, {y:-20,duration: 3,repeat: -1,yoyo: true,ease: "none"})
        gsap.to(leaf, {y:10,duration: 2,repeat: -1,yoyo: true,ease: "none"})

        // aboutBox.addEventListener('mousemove', (e)=> {
        //     var relX = e.pageX / 50 
        //     var relY = e.pageY  / 40
            
        //     gsap.to(leaf, {x: -relX*1.75 ,y: relY * 1.1})
        //     gsap.to(water, {x: relX * 1.5 ,y: -relY*1.5})
        //     gsap.to(earth, {x: -relX*2.2 ,y: relY*2})
        // })
    })

  return (
    <>
        <div className="abt_banner_svg">
            <img src="./images/mission/earth.svg" className='earth' alt="" />
            <img src="./images/mission/water.svg" className='water' alt="" />
            <img src="./images/mission/leaf.svg" className='leaf' alt="" />

        </div>
    </>
  )
}

export default BannerSvg