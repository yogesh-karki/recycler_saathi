import React from 'react'
import BannerHalf from '../../components/Banner/BannerHalf'


const stepsData = [
  {
    img: './images/extraction.svg',
    title: 'Extraction of raw materials',
    description: 'Extraction of raw materials (largely crude oil and natural gas, but also coal) – these are a complex mixture of thousands of compounds that then need to be processed.'
  },
  {
    img: './images/refine1.svg',
    title: 'Refining',
    description: 'It is a process that transforms crude oil into different petroleum products to yield a ‘monomer’ (a molecule that is the basic building block of polymers).'
  },
  {
    img: './images/refining.svg',
    title: 'Polymerization ',
    description: 'It is a process in which light olefin gases (gasoline) such as ethylene, propylene, butylene (i.e., monomers) are converted into higher molecular weight hydrocarbons (polymers). This is done by either addition polymerization or condensation polymerization.  '
  },
  {
    img: './images/compounding.svg',
    title: 'Compounding/Processing ',
    description: 'In compounding, various materials are blended by the melting process. Generally, the process is followed by the pelletization of the mixture. Pellets thus formed are then processed into plastic objects of unique designs, various sizes, shapes, and colors that can be found in our homes, offices, and industries.  '
  }
]

const PlasticIndustry = () => {


  return (
    <>
      <BannerHalf 
        image='url(./images/plastic_indusrty.jpg)'
        subtitle="Plastic"
        title="<h3>The Industry of <strong>Plastics</strong> </h3>"
      />

      <section className="r_process pi_module">
        <div className="container">
          <div className="head">
            <h3><strong>Production</strong> Process</h3>
            <p>
              Plastic can either be ‘synthetic’ or ‘biobased’. Most plastics used nowadays are synthetic plastics derived from crude oil, natural gas, or coal. In another hand, biobased plastics come are made from renewable products such as carbohydrates, starch, vegetable fats and oils, bacteria, and other biological substances. 
            </p>

            <p>
              Most of the plastics used today are derived by the following steps: 
            </p>
          </div>

          <div className="proces_step">
            {
              stepsData.map((val,index) => {
                return(
                  <div className="step" key={index}>
                    <div className="img">
                      <img src={val.img} alt="" />
                    </div>
                    <div className="text">
                      <h4>{val.title}</h4>
                      <p>{val.description}</p>  
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="global_plastic pi_module">
        <div className="container">
          <div className="wrap">
            <div className="text">
              <div className="head">
                <h3><strong>Global Plastic</strong> production since 1950  </h3>
                <p>
                  The given chart demonstrates the increase in global plastic production, measured in Tonnes per yes, from 1950 to 2020.  
                </p>

                <p>
                  When plastic was first introduced in 1950, the world produced only 2 million tons per year. However, plastics production increased twenty-fold since 1964, reaching 311 million tons in 2014, the equivalent of more than 900 Empire State Buildings. In the business-as-usual scenario, Plastic production is expected to double again in 20 years and almost quadruple by 2050. <sup><a href="https://www3.weforum.org/docs/WEF_The_New_Plastics_Economy.pdf" target="_blank">( source )</a></sup> . Researches have forecasted that if plastic production keeps on increasing in the current trend, and a strong circular abatement process is not followed, then there might be more plastics in the ocean than fish by 2050.  
                </p>

                <p>
                NOTE: The only short downturn in the graph in annual production in 2009 and 2010 was predominantly due to the 2008 global financial crisis. And recently, in 2020, the production of plastics slightly decreased by roughly 0.3 percent compared with the previous year due to the impact of COVID-19 on the industry. 
                </p>
              </div>

            </div>

            <div className="chart">
              <img src="./images/global-plastics-production.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='industrial_plastic pi_module'>
 
        <div className="wrap">
          <div className="chart">
            <img src="./images/global-plastics-production.svg" alt="" />
          </div>
          <div className="text">
          <div className="container">
            <div className="head">
              <h3><strong>Plastic production</strong> by the industrial sector</h3>

              <p>
              Due to lightweight, cheapness, convenience, and other favorable factors, plastics have been widely used in various industrial sectors like packaging, building and construction, textiles, consumers and industrial products, transportation, and industrial machinery.  
              </p>

              <p>
              As per, ‘Our World in Data’ Packaging Industry is the most dominant market in the plastic production sector. This industry alone produced about 42 percent i.e., 146 million tons of plastics in 2015.  
              </p>

              <p>
              NOTE: Primary plastic production does not directly reflect plastic waste generation, since it can be influenced by various factors like purpose of the plastic, its polymer type, the purpose of the product etc. For example, Packaging has a very short ‘in-use’ lifetime ((Typically 6 months or less) whereas plastics used in building and construction have a mean lifetime of 35 years.  
              </p>
            </div>
          </div>
        </div>
          </div>
      </section>

    </>

    
  )
}

export default PlasticIndustry