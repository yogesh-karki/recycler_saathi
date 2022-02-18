import React from 'react'
import HomeAbout from  './HomeAbout';

import Objective from '../../components/Objective';
import OurImpacts from './OurImpacts';
import ImapctSlider from '../../components/ImapctSlider';
import './home.scss'


const Home = () => {
  return (
    <>
      <section className="banner">
        <video className='videoTag' autoPlay loop muted>
            <source src="./images/video/banner.mp4" type='video/mp4' />
        </video>

        <div className="container">
            <div className="text">
              <h1>SELF-SUSTAINABLE RECYCLING ENTERPRISE</h1>
            </div>
        </div>
      </section>

      <HomeAbout />
      <OurImpacts />
      <Objective />
      <ImapctSlider />
    </>
  )
}

export default Home