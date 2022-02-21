import React from 'react'

import 'antd/dist/antd.css';
import './faq.scss'

import { Collapse } from 'antd';

const { Panel } = Collapse;


const faqData = [
    
    {
        question: 'What led to the start of Recycler Saathi?',
        answer: '<p>Plastic waste accounts for 15% of the total waste created in Nepal. The unfortunate aspect of plastic waste disposal is that it is frequently thrown into landfills with other waste, incinerated, or dumped in the open. Considering that plastics can generate a far greater value when they are recycled, incineration or landfilling plastic is a waste of resources. </p><p>Although Nepal has a number of local and dispersed plastic recycling facilities, it lacks a robust method for recycling PET bottles. A total of 1000 tons of discarded PET bottles are sent to India, out of which 12000 tons are collected each year. These statistics inform us that this informal economy can be legalized, resulting in higher and more equitable revenue generation for the Nepali market.  </p><p>Hence, Recycler Saathi was initiated in 2015, with an aim to establish a self-sustainable recycling mechanism in Nepal. It is based on the three pillars of sustainability which include economic viability for the stakeholders involved, environmental protection with a vision of a world without waste, and social upliftment of the sanitation workers working in the waste sector.</p> <p> Our ultimate goal is to formalize the waste management sector in Nepal and generate greater value for people, the planet, and the profit.</p> '
    },
    {
        question: 'How does Recycler Saathi help the environment? ',
        answer: '<p>Recycling just one ton of PET bottle waste can save up to 7.4 cubic yards of landfill space. Producing one ton of clean recycled PET in place of virgin PET can reduce the carbon emission by 1.5 tons. </p> <p> Since our inception, we have recollected 3004 tons of waste PET bottles and sent them for recycling. This implies that we have diverted 3004 tons of PET bottles going to landfills and reduced carbon emissions by 4506 tons. This is how we have become an ally of the environment and helped divert the waste from entering the ecosystem and parallelly reducing carbon emission in the environment.    </p>'
    },
    {
        question: 'Are there other activities Recycler Saathi has ventured into?',
        answer:'<p>The aim of Recycler Saathi is to have a holistic and futuristic approach to the plastic waste problem in Nepal. Hence, besides recycling waste PET bottles, one of our major priorities is advocacy and awareness among the different stakeholders involved.  Our drives of change are children and youth to whom we have been providing awareness and practical sessions on recycling.</p> <p>In regards to this, we have initiated waste Smart schools that provide knowledge to young students about waste, waste management, recycling, and influence and encourage them to have proper habits to contribute to the environment.    </p>  '
    },
    {
        question: 'Are waste workers integrated into the Recycler Saathi projects?  ',
        answer: '<p>The answer is yes. Recycler Saathi recognizes waste workers as the primary agents of change for the environment. The aim of Recycler Saathi is to help uplift the working and living condition of the waste workers by providing a wider and direct market, and a higher and fairer value for the recollected items.  </p> <p>We have also been advocating to create a dignified working environment for the waste workers by conducting occupational safety training, health camps, PPE distribution, ration distribution, and Hamro cycle yatra rally. Our programs have benefited the sanitation workers, as well as their families.  </p> '
    },
    {
        question: 'How does Recycler Saathi contribute to the circular economy? ',
        answer: '<p>The circular economic model is driven by three principles, which are eliminating waste and pollution, circulating product and materials at their highest value and regenerating nature and natural resources. Recycler Saathi helps to restore and circulate the plastic waste back into the economy loop and hence, contributes to a circular economy. </p>  '
    },
    {
        question: 'How can I be a part of Recycler Saathi?  ',
        answer: '<p>Recycler Saathi frequently conducts webinars, awareness programs and volunteering opportunities. For recent updates, you can stay connected with us through any of our social media handles, Facebook, Instagram, and LinkedIn.  </p> '
    }
]




export const Faq = () => {
  return (
    <>
        <section className="faq_banner">
            <div className="container">
                <div className="text">
                    <h2><strong>FAQs</strong> </h2>
                </div>
            </div>
        </section>

        <section className="faq">
            <div className="container">
                <Collapse accordion className='faq_collapse'>
                    {
                        faqData.map((val,index) =>{
                            return(
                                <Panel header={val.question} key={index}>
                                    <article dangerouslySetInnerHTML={{ __html: val.answer }} ></article>
                                </Panel>
                            )
                        })
                    }

                </Collapse>
            </div>
        </section>
    </>

  )
}
