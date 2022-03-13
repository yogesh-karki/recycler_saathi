import React from "react";
import BannerHalf from "../../components/Banner/BannerHalf";

import ProblemAccordian from "./ProblemAccordian";
import "./Problems.scss";

const RegionalProblems = () => {
  const problemData = [
    {
        image: "./images/global_problem1.jpg",
        title: "South Asia is the third-largest contributor to global plastic waste.",
        content: `
          <p>
          Some of the world’s top offenders of plastic waste lie in South Asia like China and the Philippines. The Philippines, an Asian island nation making up approximately 1% of the world’s population is responsible for 36.4% of the world’s ocean plastic. 7 of the 10 rivers that transport most plastic in the ocean are located in the Philippines. (“The Philippines,” 2020) 
          </p>
        `,
    },
    {
        image: "./images/global_problem2.jpg",
        title: "South Asia’s transboundary rivers act as pathways for plastic pollution",
        content: `
          <p>   
          The interconnectedness of the rivers and oceans results in the transboundary movement of plastic waste from rivers to the ocean. Recent studies indicate that among the top ten most polluted rivers in the world, eight of them come from Asia, and two of them are in the South Asia subregion (i.e., 6th – Ganges, and 3rd – Indus). The rivers that account for roughly 22% of the plastic weight of the top ten plastic polluting rivers, i.e. approximately 19% of the global MPP are Rivers Indus, Meghna, Brahmaputra, and the Ganges in South Asia region. (Southeast Asia’s Plastic Waste Problem, 2019) 
          </p>
        `,
    },
    {
        image: "./images/global_problem3.jpg",
        title: "Seventy-five percent of globally exported plastic waste ends up in Asia.   ",
        content: `
          <p>  
          Since, July 2017, when China banned the import of plastic waste under its national sword policy, the amount of plastic waste imported to countries like the Philippines, Malaysia, and Indonesia has been doubled. (Southeast Asia’s Plastic Waste Problem, 2019) However, the situation is improving after the amendment of the Basel Convention to include a treaty governing the global movement of hazardous waste and unrecyclable plastic. (Southeast Asia’s Plastic Waste Problem, 2019)   
          </p>
        `,
    }
  ];


    return (
        <>
            <BannerHalf image="url(./images/regional_problem.jpg)" subtitle="Problems" title="<h3>Regional <strong>Problems</strong> </h3>" />

            <section className="problems">
                <div className="container">
                    <ProblemAccordian data={problemData} />
                </div>
            </section>
        </>
    );
};

export default RegionalProblems;
