import React from 'react'
import BannerHalf from '../../components/Banner/BannerHalf'

import ProblemAccordian from "./ProblemAccordian";

import './Problems.scss'

const NationalProblems = () => {
  const problemData = [
    {
        image: "./images/global_problem1.jpg",
        title: "The majority of the plastic waste is burned or openly dumped",
        content: `
          <p>
            Low awareness and near dysfunctional waste management system in Nepal results in open burning, dumping, and littering of plastic waste. As per the baseline report of solid waste management in Nepal, These ubiquitous waste management practices coupled with unplanned and rapid urbanization have caused land\soil pollution and air pollution. This has also resulted in the risk of flooding, waterlogging, and riverine contamination.
          </p>
        `,
    },
    {
        image: "./images/global_problem2.jpg",
        title: "Lack of robust recycling mechanism",
        content: `
          <p>   
          Almost 16% of the total solid waste generated in Nepal is plastic waste.  However, there lacks a robust recycling mechanism due to which the majority of plastic waste is just disposed of in the environment. It is reported that 304 tons of plastic waste were generated in Nepal in 2018, out of which the majority of the waste, 204 tons, ended up in garbage piles and open dumping. (Nepali Times, 2018).  
          </p>
        `,
    },
    {
        image: "./images/global_problem3.jpg",
        title: "Insufficient sanitary landfills",
        content: `
          <p>  
          In total, 37% of MSW in Nepal is disposed of in sanitary landfills but the landfill is not properly managed and has been known to cause leaching, fouling, bad smell, and local and governmental disputes. Okharpauwa landfill site at Nuwakot and Teku landfill site in Kathmandu are the major landfill sites in Nepal. However, as per the report of ICIMOD, these landfills are unsuitable for landfilling because of their proximity to the water resource. The alternate landfill site is also of immediate need as the capacity of  Okharpauwa Sisdole ladnfill is running out.
          </p>

          <p>
          The Ministry of Urban Development and Kathmandu Metropolitan City had expedited their efforts to complete the construction of a sanitary landfill site at Bancharedanda on the border of Nuwakot and Dhading districts by the end of 2020. However, the project is still not complete and fully functioning due to various reasons. 
          </p>
        `,
    },
    {
      image: "./images/global_problem3.jpg",
      title: "Microplastics and plastics",
      content: `
        <p>  
        Very few researches cover the problem of microplastics in Nepal. However, a recent study has found microplastics in the snow of Mount Everest, which mostly consisted of microfibers from the trekker’s clothing. (One Earth, 2020). Evidence of plastic ingestion in Rhinoceros of Chitwan National Park has also been found by ….... 
        </p>

        <p>
        Lack of detailed research and data also creates difficulty in the thorough understanding of the plastic waste management scenario in Nepal. This creates a roadblock for the holistic approach to solutions of plastic waste management.
        </p>
      `,
  }
  ];

  return (
    <>
        <BannerHalf 
            image='url(./images/national_problem.jpg)'
            subtitle="Problems"
            title="<h3>National <strong>Problems</strong> </h3>"
        />

        <section className="problems">
            <div className="container">
                <ProblemAccordian 
                  data = {problemData}
                />
            </div>
        </section>

    </>
  )
}

export default NationalProblems