import React, {useEffect} from 'react'
import gsap from "gsap";
import { NodeExpandOutlined } from '@ant-design/icons';

const PrBanner = () => {

    useEffect(() => {
        gsap.to('.pr_banner_svg .recycling', {rotate: 20,duration: 5,yoyo: true,repeat: -1})
        gsap.to('.pr_banner_svg .boy', {ease: NodeExpandOutlined, y: -20,duration: 3,yoyo: true,repeat: -1})
    })
  return (
    <div className="pr_banner_svg">
        <img src="./images/mission/plastic_recycling.svg"  alt="" />
        <img src="./images/mission/plastic_recycling_boy.svg" className='boy'  alt="" />
        <img src="./images/mission/recycling.svg" className='recycling' alt="" />

    </div>
  )
}

export default PrBanner