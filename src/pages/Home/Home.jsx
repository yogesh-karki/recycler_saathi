import React from 'react'
import HomeAbout from  './HomeAbout';

import Objective from '../../components/Objective';
import OurImpacts from './OurImpacts';
import ImapctSlider from '../../components/ImapctSlider';
import './home.scss'
import ImpactGrow from './ImpactGrow';
import HomeNews from './HomeNews';

import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";


const Home = () => {
  return (
    <>
      <section className="banner">
        <video className='videoTag' autoPlay loop muted>
            <source src="./images/video/banner.mp4" type='video/mp4' />
        </video>

        <div className="container">
            <div className="text">
              {/* <h1>SELF-SUSTAINABLE RECYCLING ENTERPRISE</h1> */}
                <h2>We are working together to end plastic waste</h2>
                <p>Ending plastic waste is ambitious. But it is through collaboration and collective action that this complex problem can be solved.</p>
                <a href="">Learn More</a>

            </div>
        </div>
      </section>

      <HomeAbout />
      <ImpactGrow />
      <ImapctSlider />
      <HomeNews />

      <div className="insta_feed">
        <div className="head">
          <h3>follow us on instagram <strong>Recycler Saathi</strong> </h3>
        </div>

        {/* <InstagramFeed
          token="IGQVJWRHBRMmZADTHVmR3VnbUduY25zb25WcWhsRUktVDdMRk0xRm9MRTFqTEE3TFQ2cGFDNkp3Q3IyYVl2OTZAsUS1UbmNjTnhFYUxPbktmaU9CbFBjbmF4QWdWY1JOTk9HX0dNaU9yem1aVWxDZAk5GOQZDZD"
          counter="10"
        /> */}
      </div>
    </>
  )
}

export default Home