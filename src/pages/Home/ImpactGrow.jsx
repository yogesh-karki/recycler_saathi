import React,{useEffect , useState} from 'react'

const impact = [
    {
        image: './images/impact/PET_Bottles_Collected.jpg',
        title: '<h4>Waste PET <em>collected </em> </h4> ',
        count: '3313',
        unit: 'Tons',
        text: 'We care for the environment and promote recycling as a way to sustainability.'
    },
    {
        image: './images/impact/carbon_emissions.jpg',
        title: '<h4>Carbon Emission <em>Controlled </em> </h4> ',
        count: '4669.5',
        unit: 'Tons',
        text: 'We foster young students and provide them knowledge and education on Environment and Sustainability.'
    },
    {
        image: './images/impact/Children_engaged.jpg',
        title: '<h4>Children <em>Engaged </em> </h4> ',
        count: '7000',
        unit: '+',
        text: 'We direct the interest of young children towards environment conservation and protection'
    },
    {
        image: './images/impact/Youths_Engaged.jpg',
        title: '<h4>Youths <em>Engaged </em> </h4> ',
        count: '20000',
        unit: '+',
        text: 'We engage youth and harness their passion to bring sustainable change to the community.'
    },
    {
        image: './images/impact/Districts_Reached.jpg',
        title: '<h4>Districts <em>Reached </em> </h4> ',
        count: '15',
        unit: '',
        text: 'We foster young students and provide them knowledge and education on Environment and Sustainability.',
    },
    {
        image: './images/impact/Government_Officials.jpg',
        title: '<h4>Government <em>Officials Trained</em> </h4> ',
        count: '70',
        unit: '+',
        text: 'We foster young students and provide them knowledge and education on Environment and Sustainability.'
    },
    {
        image: './images/impact/Waste_Smart_Schools.jpg',
        title: '<h4>Waste Smart <em>Schools </em> </h4> ',
        count: '15',
        unit: '',
        text: 'We foster young students and provide them knowledge and education on Environment and Sustainability.'
    },

]





const ImpactGrow = () => {
    const [isExpand , setIsExpand] = useState(-1)    

    const ExpandButton = () => {
        return (
            <div className="expand_btn">
                <img src="./images/expand.svg" alt="" />
            </div>
        )
    }
 
    return (
        <section className='impact_grow'>
            <div className="container">
                <div className="head">
                    <h3>The impacts of <strong>Recycler Saathi</strong></h3>
                </div>
            </div>

            <div className="impact_accordion">
                {
                    impact.map((val,index) => {
                        return(
                            <div className={`${isExpand === index ? 'expand' : ''} card `} 
                                style={{background: `url(${val.image})` }} 
                                key={index}  
                                onClick={() => setIsExpand(index)}
                            >
                                <div className="content">
                                    <article className='title' dangerouslySetInnerHTML={{ __html: val.title }} ></article>
                                    <div className="counter">
                                        <h2>{val.count} <span>{val.unit}</span> </h2>
                                        <p>{val.text}</p>
                                    </div>

                                    {
                                        isExpand != index ? <ExpandButton /> : ""
                                    }
                                    
                                </div>
                            </div>
                        )
                    })
                }

                
            </div>
        </section>
  )
}

export default ImpactGrow