import React,{useEffect, useRef} from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BannerHalf from '../../components/Banner/BannerHalf'
import TimelineImage from './TimelineImage';

gsap.registerPlugin(ScrollTrigger); 



const PlasticClassification = () => {
    const pcData = [
        {
            icon: "./images/plastic/1.svg",
            subtitle: "RESIN CODE 1",
            title: "PETE (Polyethylene Terephthalate)",
            description: "PETE is lightweight and can withstand huge temperatures.  It is used in Polyester fibers or Polar Fleece, Thermoformed sheet, Strapping, Soft drink bottles, Tote bags, Furniture, Carpet, Paneling, and new containers.",
            image: "./images/plastic/icon1.svg"
        },
        {
            icon: "./images/plastic/2.svg",
            subtitle: "RESIN CODE 2",
            title: "HDPE (High-Density Polyethylene)",
            description: "HDPE is long-lasting and used in Bottles, Grocery bags, Milk jugs, Recycling bins, Agricultural pipe, Base cups, Car stops, Playground equipment, and Plastic lumber.",
            image: "./images/plastic/icon2.svg"
        },
        {
            icon: "./images/plastic/3.svg",
            subtitle: "RESIN CODE 3",
            title: "PVC (Polyvinyl Chloride)",
            description: "PVC has high resistance to grease, oils, and chemicals. It is used in Pipe, Window profile, Siding, Fencing, Flooring, Shower curtains, Lawn chairs, Non-food bottles, Children’s toys.",
            image: "./images/plastic/icon3.svg"
        },
        {
            icon: "./images/plastic/4.svg",
            subtitle: "RESIN CODE 4",
            title: "LDPE (Low-density Polyethylene)",
            description: "LDP plastics are safe, flexible, and durable. It is used in Plastic bags, six pack rings, Various containers, Dispensing bottles, Wash bottles, Tubing, and various moulded laboratory equipment.",
            image: "./images/plastic/icon4.svg"
        },
        {
            icon: "./images/plastic/5.svg",
            subtitle: "RESIN CODE 5",
            title: "PP (Polypropylene)",
            description: "PP is used in Auto parts, Industrial Fibers, Food containers, and Dishware. It is also used to make medicinal bottles and is safe, durable, and lightweight.",
            image: "./images/plastic/icon5.svg"
        },
        {
            icon: "./images/plastic/6.svg",
            subtitle: "RESIN CODE 6",
            title: "PS (Polystyrene)",
            description: "PS, a cheap and single-use plastic, is used in Desk accessories, Cafeteria trays, Plastic utensils, Toys, Video cassettes and cases, Clamshell containers, Packaging peanuts, insulation board, and other expanded polystyrene products (e.g.styrofoam).",
            image: "./images/plastic/icon6.svg"
        },
        {
            icon: "./images/plastic/7.svg",
            subtitle: "RESIN CODE 7",
            title: "OTHER OR O (Other Plastics)",
            description: "Other or O usually fall into RIN code 1 to 6 groups. Their properties depend upon the resin combination. Because of this, some can be recycled while others may not. It is used in Acrylic, Nylon, Polycarbonate, and polylactic acid (a bioplastic), and Multilayer combination of different plastics.",
            image: "./images/plastic/icon7.svg"
        },

    ]

    return(
        <>
            <div className="pc_wrap">
                {
                    pcData.map((val,index) => {
                        return(
                            <div className="pc_card" key={index}>
                                <div className="pc_head">
                                    <img src={val.icon} alt="" />

                                    <div className="title">
                                        <h5>{val.subtitle}</h5>
                                        <h4>{val.title}</h4>
                                        <p>{val.description}</p>
                                    </div>
                                </div>

                    

                                <img className='pl_product' src={val.image} alt="" />
                            </div>
                        )
                    })
                }

                
            </div>
        </>
    )
}

const introData = [
    {
        title: '<h3><strong>History of </strong>Plastics </h3>',
        subtitle: 'A SCIENTIFIC REVOLUTION',
        content: `<p>
                    Over the last century and half, humans have learned how to make synthetic polymers also known as Plastic, using both natural substances like cellulose but more often using the plentiful carbon atoms provided by petroleum and other fossil fuels. Synthetic polymers are made up of long chains of atoms, arranged in repeating units that make them strong, lightweight, and flexible. 
                </p>

                <p>
                    The first man-made plastic was invented in 1862, with the material Parkesine, an organic material derived from cellulose that, once heated, could be molded and retained its shape when cooled. Following came the celluloid, which was invented as an alternative to the rising popularity and demand of billiard balls made from ivory by slaughtering wild elephants. It was invented by treating cellulose, a compound found in wood and straw, with camphor which could then be used to imitate various shapes and natural substances. However, celluloid was inflammable which made production highly risky therefore, research and development for better alternatives continued.  
                </p>

                <p>
                    As a result of that, Bakelite, a combination of formaldehyde and phenol (a waste product of coal tar) was discovered. However, Bakelite was only the beginning. Between 1907-1930 polymer also known as plastic, started taking shape in the form of Polystyrene, Vinyl, Acrylic, and Nylon. Then around 1933, Polyethylene, one of the most versatile plastics, was discovered which is still used to make food packaging materials, medical tubing, high-tensible cables, bullet proof vests, and other consumer products such as buckets, bottles, and bins.
                </p>

                <p>
                    With the advancement in manufacturing technologies such as the invention of a technique called injection-molding, it was now possible to inject plastics to make any shape of any size such as a toy duck, safety helmet, or chair. This caused an inexpensive and rapid production of plastic on a large scale which was then assumed it would increase access to material wealth as well as protect our natural resources and bio-diversity.  
                </p>

                <p>
                    In America, the plastic production factories rapidly multiplied during World War II where soldiers were to be supplied with plastic helmet liners and waster-resistant vinyl raincoats. Similarly, the aircraft cockpits were made of plexiglass and parachutes from nylon. After the end of the war, these same factories then turned towards creating consumer products made of plastics such as hairdryers, telephones, sofas, clothing, utensils, etc.; it began replacing other materials such as wood, glass, and fabric.  
                </p>

                <p>
                    Soon, the world followed suit and today almost everything is made up of plastic. And although Plastic brought us convenience and cost-effectiveness, it is not without its problems. With its single-use design and raw materials sourced from non-renewable energy, it is one of the biggest causes of environmental pollution. Moreover, plastics take hundreds of years to decompose resulting in a huge buildup of waste. Therefore, the task of this century is to concentrate our focus on addressing those problems with innovative solutions such as reducing plastic use, developing biodegradable plastics, and finding new ways to recycle.  
                </p>`,

    },

    {
        title: '<h3><strong>Know your </strong>Plastics </h3>',
        subtitle: 'Properties and Beneficial Characteristics of Plastics ',
        content: `
                <p>
                Plastics always include carbon and hydrogen. Additionally, it can also contain oxygen, chlorine, nitrogen, silicon, fluorine, sulfur, and phosphorus. In general, a plastic’s chemical composition can be divided into two distinct categories; aliphatic and heterochain polymers. Aliphatic (linear) plastic has carbon atoms in their backbone chains and heterochain polymers contain atoms such as oxygen, nitrogen, or sulfur in their backbone chains, including carbon.      
                </p>

                <p>
                Plastic is any synthetic or semisynthetic organic polymer made from just about any organic polymer and petrochemicals. The polymer used to make plastics is mixed with additives such as colorants, plasticizers, etc. to affect the chemical and mechanical composition and properties of plastics. A raw material called resin is used for manufacturing plastic products and is often used in packaging. Some of the common resins are polyethylene (PE), polyethylene terephthalate (PET), polypropylene (PP), polyvinyl chloride (PVC), and polystyrene (PS). Industrial fabricators of plastic products often divide plastics as either “commodity” resins or “specialty” resins. Commodity resins are produced at high volume and low cost whereas specialty resins are plastics produced at low volume and higher cost such as polyacetal, nylon, Teflon, etc.      
                </p>

                <p>
                Plastic is a polymer, a substance made of many repeating units. Naturally occurring polymers include tar, latex, amber, shellac, tortoiseshell, cellulose, and animal horn. Synthetic polymers contain polyethylene, polystyrene, polypropylene, polyvinyl chloride, and polytetrafluoroethylene (Teflon). Polymers can be dyed in an endless array of colors and be enhanced by additives. It can be used for specific applications through various design and engineering. They are resistant to chemicals, insulators of heat and electricity, light in mass and have varying degree of strength, and can be processed to create fibers, sheets, foams, or intricate molded parts.  
                </p>

                <p>
                A polymer can be thought of as a chain in which each link is the “mer”, or monomer (single unit). The chain is made by polymerizing, or joining at least 1,000 links together. Monomers are chemically joined together by Addition polymerization and Condensation polymerization. Polyethylene, polystyrene, and acrylic are examples of plastics formed by addition polymerization; they are often thermoplastic in nature and are easily processed, reprocessed, or recycled. Similarly, Nylons, some polyesters, and urethanes are joined together through condensation polymerization which makes them a thermoset polymer that cannot be melted and reformed.     
                </p>

                <p>
                The polymers have extremely large molecules which distinguish them from other compounds. The polymer molecules can have different arrangements. For example, amorphous polymers are often transparent and used as food wrap, headlights, and contact lenses. Similarly, if the arrangement in a polymer is in a distinct pattern, it is said to be crystalline. Such materials are translucent or opaque, and have greater strength and higher melting points.     
                </p>

                <p>
                Plastic is present in almost all products and in almost all markets such as electronics, consumer goods, building and construction, and automotive. Plastics has taken the place of steel, wood, paper, and glass and has made it an inexpensive, accessible, and sanitary substance which can be shaped by humans to their every whim. Plastics are lightweight, water and shock resistant, thermally and electrically insulating. It has a high strength-to-weight ratio and can be mass manufactured, making it very affordable. Plastic is used to make products that keep us safe and help us stay connected such as automotive airbags in cars and cell phones. It helps to keep our food fresher by dramatically extending the shelf life of fresh foods and beverages. Similarly, plastic sealants, insulation and other construction products make our homes energy efficient while lightweight plastics in cars result in an increase of a vehicle’s fuel economy.     
                </p>`,

    },
    {
        title: '<h3><strong>Development of</strong> Plastics </h3>',
        subtitle: 'A brief timeline ',
        contentDifferent: <TimelineImage />
        // content: ` <h4>Invention of the Precursors </h4>
        //             <p><strong>1839 - 1856</strong>Natural Rubber, Vulcanite, Gutta- Percha, Shellac, and Bois Durci.   </p> 
                    
        //             <h4>Beginning of the Plastic Era with Semi-Synthetics </h4>
        //             <p><strong>1839 - 1894</strong>Polystyrene or PS, Parkesine, Cellulose Nitrate or Celluloid, Polyvinyl Chloride or PVC, Viscose Rayon. </p>
                    
        //             <h4>Thermosetting Plastics and Thermoplastics </h4>
        //             <p><strong>1908-1939</strong>Cellophane, Phenol-Formaldehyde (trade name Bakelite), Vinyl or PVC, Ployvinylidene chloride or Saran, also called PVDC, Low-density polyethylene or LDPE, Acrylic or Polymethyl Methacrylate, Polyurethanes (trade name Igamid for plastic materials and Perlon for fibers), Polystyrene, Polytetrafluorethylene or PRFE (trade name Teflon), Nylon and Neoprene 	 </p> 
                    
        //             <h4>Polyethylene Terephthalate or Pet</h4>
        //             <p><strong>1941- 1985</strong>Polyethylene Terephthalate or Pet, Low-Density Polyethylene, Unsaturated Polyester PET, High-density polyethylene or HDPE (trade name Marlex), Polypropylene or PP, Saran Wrap, Styrofoam, Polyimide, Thermoplastic Polyester, Linear Low-Density Polyethylene, Liquid Crystal Polymers  </p>
                    

        // ` ,

    },
    {
        title: '<h3><strong>Classifying </strong> Plastics </h3>',
        subtitle: 'Resin Identification Number (RIN) ',
        contentDifferent: <PlasticClassification />
        // content: `
        //         <p>
        //             There are seven Resin Identification Number (RIN) also known as Resin Code. It originated from the Society of Plastics Industry (SPI) back in 1988. However, it was only administered in 2008 and has been placed on almost every piece of plastic around the globe. Each plastic product has its own RIN which indicates the bonding structure of the molecules after being polymerized. Each resin is identified to a Resin Identification Number. For example, RIN 1 is Poly (ethylene terephthalate), RIN 2 is Hight Density Polyethylene, RIN 3 is Poly (vinyl chloride), RIN 4 is Low density polyethylene, RIN 5 is Polypropylene, RIN 6 is Polystyrene, and RIN 7 is other resins. Within the UK, codes 1, 2, 5 and 6 can usually be recycled, whereas codes 3, 4, and 7 are usually not recycled. Following is a summary of the seven different plastic resin with examples:  
        //         </p>

        //         <h4>Resin Code 1 </h4>
        //         <p><strong>PETE (Polyethylene Terephthalate) </strong> PETE is lightweight and can withstand huge temperatures.  It is used in Polyester fibers or Polar Fleece, Thermoformed sheet, Strapping, Soft drink bottles, Tote bags, Furniture, Carpet, Paneling, and new containers.</p>
        //         <img src="" alt="" />

        //         <h4>Resin Code 2 </h4>
        //         <p><strong>HDPE (High-Density Polyethylene) </strong> HDPE is long-lasting and used in Bottles, Grocery bags, Milk jugs, Recycling bins, Agricultural pipe, Base cups, Car stops, Playground equipment, and Plastic lumber.</p>
        //         <img src="" alt="" />

        //         <h4>Resin Code 3</h4>
        //         <p><strong>PVC (Polyvinyl Chloride) </strong> PVC has high resistance to grease, oils, and chemicals. It is used in Pipe, Window profile, Siding, Fencing, Flooring, Shower curtains, Lawn chairs, Non-food bottles, Children’s toys.  </p>
        //         <img src="" alt="" />

        //         <h4>Resin Code 4 </h4>
        //         <p><strong>LDPE (Low-density Polyethylene) </strong> LDP plastics are safe, flexible, and durable. It is used in Plastic bags, six pack rings, Various containers, Dispensing bottles, Wash bottles, Tubing, and various moulded laboratory equipment.  </p>
        //         <img src="" alt="" />

        //         <h4>Resin Code 5</h4>
        //         <p><strong>PP (Polypropylene) </strong> PP is used in Auto parts, Industrial Fibers, Food containers, and Dishware. It is also used to make medicinal bottles and is safe, durable, and lightweight.  </p>
        //         <img src="" alt="" />

        //         <h4>Resin Code 6 </h4>
        //         <p><strong>PS (Polystyrene) </strong> PS, a cheap and single-use plastic, is used in Desk accessories, Cafeteria trays, Plastic utensils, Toys, Video cassettes and cases, Clamshell containers, Packaging peanuts, insulation board, and other expanded polystyrene products (e.g.styrofoam).  </p>
        //         <img src="" alt="" />

        //         <h4>Resin Code 7 </h4>
        //         <p><strong>OTHER OR O (Other Plastics) </strong> Other or O usually fall into RIN code 1 to 6 groups. Their properties depend upon the resin combination. Because of this, some can be recycled while others may not. It is used in Acrylic, Nylon, Polycarbonate, and polylactic acid (a bioplastic), and Multilayer combination of different plastics.  </p>
        //         <img src="" alt="" />
        // `
    },
    {
        title: '<h3><strong>Myths of </strong> Plastics </h3>',
        subtitle: '',
        content: `
                <p>
                    One of the major problems of plastic is that more and more of it is ending up in the sea. Government, non-profits, and campaigners all over the world have launched a war against plastic. They want both the producers and consumers of plastics to do better either by implementing a circular economy, recycling, or segregating plastic waste at source. Moreover, plastic uses non-renewable sources of energy such as oil and many policy makers are even pushing for a total ban on plastics. Therefore, amidst all this chaos, myths surrounding plastics are totally common and expected. The following are a few myths on plastic:    
                </p>

                <h4>Myth No.1</h4>
                <p>
                    <strong>Not all plastics are recyclable </strong>
                    In principle, almost all plastics can be recycled. Out of the seven types of plastics, PET, HDPE, LDPE, and PP are the most commonly and easily recycled. The remaining three (PS, OTHER, and PVC) still require more research and development as well as financial incentives to include them in the recycling process. Due to technological and economic constraints, these plastics are left unrecycled, especially due to their chemical and mechanical properties. For example, these items contain multiple layers and types of plastics which makes recycling difficult and costly. Moreover, plastics that are contaminated by food and other substances affect the resins to a point where they cannot be reused.  
                </p>

                <h4>Myth No.2  </h4>
                <p>
                    <strong>All plastics are recycled </strong>  
                    This may sound directly contradictory to Myth No.1 but let us explain. In theory, all plastics are recyclable. However, plastics that are convenient to recycle are still not recycled. Most developed countries even ship (illegally and legally) their recyclable plastics to other developing countries, mainly to Asian countries such as Malaysia, Philippines, and India. Why? It is due to the limited amount of recycling facilities and the high cost associated with it. And there is no guarantee that the recyclable plastics shipped to these Asian countries will recycle them all. Most of the plastics, therefore, end up in dumping sites, the oceans, being burnt, or the landfills which causes the increase in carbon emissions and leakages of toxic chemicals.   
                </p>

                <h4>Myth No.3</h4>
                <p>
                    <strong>Plastic may cause cancer </strong>
                    Many plastic products do not contribute to increased cancer risk. However, there are a few plastics that pose a danger. So, it’s important to stay informed. The “good” numbers to look for are RIN 1, 2, 4, and 5. PET, or polyethylene (RIN 1) is one such plastic product that is generally used to make single serving plastic water bottles. They are safe to use (at least once) and if not overheated or used for multiple amounts of time. The “bad” numbers (RIN 3, 6, and 7) must be used as intended. For example, when Polystyrene (RIN 6) is heated in the microwave or used for hot liquid, it has negative health effects.  
                </p>

                <h4>Myth No 4</h4>
                <p>
                    <strong>This plastic is 100% bio-degradable </strong>
                    Any plastic product claiming to be 100% bio-degradable is made from plants rather than fossil fuels. However, claiming that it is 100% bio-degradable is a little too soon and untrue. For example, in an experiment conducted at the University of Plymouth by Imogen Napper, bags termed as “bio-degradable” were still present in both soil and sea water after three years, and most plastic that call themselves “compostable” or “oxo-biodegradable” need to industrially be composed. Therefore, there is still a lot to be done in the section of “green plastics” and for now nothing can be claimed with 100% certainty especially not from the consumer’s perspective.  
                </p>
        `
    },


    
]

const AboutPlastics = () => {
    const headerRefs = useRef([])
    headerRefs.current = [];

    const addToRefs = el => {
        if(el && !headerRefs.current.includes(el)){
            headerRefs.current.push(el)
        }
    };

 

    useEffect(() => {
        headerRefs.current.forEach((el, index) => {
            const head = el.querySelector('.head')
    
            gsap.to(head, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top top',
                    pin: head,
                    end: 'bottom center',
                }
            })   
        })

        

    })

    

  return (
    <>
        <BannerHalf 
            image='url(./images/plastic_introduction.jpg)'
            subtitle="Plastic"
            title="<h3>Introduction of <strong>Plastics</strong> </h3>"
        />

        <section className="plastic_intro">
            

            {
                introData.map((val,index) => {
                    return(
                        <div className="p_card " key={index} ref={addToRefs}>
                            <div className="container">
                                <div className="card_wrap" >
                                    <div className="head" >
                                        <h6>{val.subtitle} </h6>
                                        <article dangerouslySetInnerHTML={{ __html: val.title }} ></article>
                                    </div>

                                    <div className="content">
                                        
                                        {val.contentDifferent ? val.contentDifferent : <article dangerouslySetInnerHTML={{ __html: val.content }} ></article>  }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>

    </>
  )
}

export default AboutPlastics