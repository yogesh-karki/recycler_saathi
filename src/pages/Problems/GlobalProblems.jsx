import React from "react";
import BannerHalf from "../../components/Banner/BannerHalf";
import ProblemAccordian from "./ProblemAccordian";

import './Problems.scss'



const GlobalProblems = () => {
  const problemData = [
    {
        image: "./images/global_problem1.jpg",
        title: "Harmful chemicals can sometimes be associated with plastic",
        content: `
          <p>
            Harmful chemicals can be associated with plastics during the production phase when additives, colorants, and stabilizers are added, which might later leach out from the plastic when weathered in natural conditions.  
          </p>

          <p>
          Some monomers that are considered harmful are BPA which disrupts the endocrine function, and styrene and vinyl chloride monomers which are shown to have carcinogenic and mutagenic effects. Chemicals that are regulated by governmental agencies because of their toxicity or persistence in organisms are namely heavy metals, pesticides, Polycyclic aromatic hydrocarbons (PAHs), and Polychlorinated Biphenyls (PCBs).   
          </p>
        `,
    },
    {
        image: "./images/global_problem2.jpg",
        title: "Countries lack resources to combat plastic waste management problems  ",
        content: `
          <p>   
          Many countries lack resources to combat plastic waste management problems at source which includes lack of sanitary landfills, incineration facilities, recycling capacities, and waste management policies. This leads to ‘plastic leakage’ into the river and ocean. It also promotes ‘illegal trade of plastic waste’. 
          </p>
        `,
    },
    {
        image: "./images/global_problem3.jpg",
        title: "About 14 million tons of plastic waste end up in the ocean every year. ",
        content: `
          <p>  
            80% source of marine litter is land-based, whereas the remaining 20% is from sea-based aquaculture activities. The Great Pacific Garbage Patch has formed gradually as a result of marine pollution gathered by ocean currents.  
          </p>
        `,
    },
    {
        image: "./images/global_problem4.jpg",
        title: "According to UNESCO, plastic kills around 1 million seabirds every year ",
        content: `
          <p>  
          According to UNESCO, plastic kills roughly 1 million seabirds per year. One study has found that 90% of species have ingested some form of plastic, and by 2050, nearly all, 99%, will have eaten plastic. Deaths of marine life have occurred due to ingestion, suffocation, and entanglement.  
          </p>
        `,
    },
    {
        image: "./images/global_problem5.jpg",
        title: "Plastics break down into tiny microplastics",
        content: `
          <p>
          Under the influence of solar UV radiation, wind, currents, and other mechanical factors, huge plastics can break down into tiny microplastics. These microplastics are now found ubiquitously, even in extreme environments like Mariana Trench: the deepest point of the ocean, and the snow of Mount Everest: the highest mountain in the world.  
          </p>

          <p> 
          Some microplastics are of primary origin and come from products like body wash, toothpaste, synthetic clothing, cosmetic products, pellets, etc. Those microplastics can enter into the ecosystem via the route of wastewater, atmospheric deposition, stormwater runoff, shipping accidents etc.
          </p>

        `,
    },
    {
        image: "./images/global_problem6.jpg",
        title: "A person can ingest a credit card worth of microplastics every week.",
        content: `
          <p>
          Microplastics get ingested by marine life and eventually by human beings due to the biomagnification and bioaccumulation of microplastics in the food chain.. A recent study has found the first evidence of microplastics in a human placenta. However, the toxic effects of microplastics on human health are still unknown.  
          </p>

        `,
    },
  ];

    return (
        <>
            <BannerHalf image="url(./images/global_problem.jpg)" subtitle="Problems" title="<h3>Global <strong>Problems</strong> </h3>" />

            <section className="problems">
                <div className="container">
                    <ProblemAccordian 
                      data = {problemData}
                    />
                </div>
            </section>
        </>
    );
};

export default GlobalProblems;
