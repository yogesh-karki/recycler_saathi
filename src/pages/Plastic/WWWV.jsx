import React from 'react'
import BannerHalf from '../../components/Banner/BannerHalf'
import ScrollTop from '../../components/ScrollTop'
import './plastic.scss'

const WWWV = () => {
  return (
    <>
      <ScrollTop />

      <BannerHalf 
        image='url(./images/plastic_wwwv.jpg)'
        subtitle="The Coca-Cola Foundation"
        title="<h3><strong>World Without</strong> waste vision </h3>"
      />

      <section className="wwvi intro">
        <div className="container">
          <div className="head">
            <h3><strong>An ambitious</strong> sustainable initiative</h3>
            <p>
              The Coca-Cola Foundation recognizes its responsibility to help solve the global plastic waste crisis. World Without Waste, is an ambitious sustainable initiative, which aims to create systemic change through a circular economy for our packaging alongside our bottling partners.  
            </p>

            <p>
            The World Without Waste strategy has signaled a renewed focus on our entire packaging lifecycle from how bottles and cans are designed and produced to how they’re recycled and repurposed through a focus on three fundamental areas: design, collect, and partner. 
            </p>

            <p>
              The design aspect focuses on making 100 percent of their packaging recyclable globally by 2025, and using 50% of our recycling materials by 2030 A.D.  
              The vision also focuses on collecting recycled bottles and incorporating them into the industry. They also aim to strive their beverage packaging towards a circular economy. The goal is to collect and recycle a bottle by 2030 and create a circular solution around the world.  
            </p>
          </div>
        </div>
      </section>

      <section className='wwvi full_image'>
        <img src="./images/www-section.png"  alt="" />
      </section>

      <section className="wwvi text_cr">
        <div className="container">
          <p>
          The plastic waste crisis cannot be done by a single entity. Therefore, the world without waste vision focuses on partnering with global entities to focus on recycling. We believe partnerships and collective action are necessary to deliver both a more sustainable business and a more sustainable future.  
          </p>

          <p>
          The vision focuses on looking outside the company for ideas, inspiration, and innovation. Delivering the World Without Waste objectives requires progressive thinking and solutions from sharp minds around the globe including industry peers, the public sector, and civil society that see both the big picture and the small, iterative steps needed to get there. 
          </p>

          <p>
          With this vision in mind, Recycler Saathi has been an ally in helping promote recycling throughout the nation. The project was initiated in 2019 and aligns with the vision of the Coca-cola Foundation of World Without Waste and aims to create a self-sustaining waste PET bottle recycling mechanism in Nepal. It also envisions formalizing the waste management sector in Nepal and creating reliable sustainable mechanisms in Nepal.   
          </p>
        </div>
      </section>

      <section className="wwvi video_section">
        <div className="container">
          <div className="video">
            <iframe src="https://www.youtube.com/embed/uMHXAvPHtDY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default WWWV