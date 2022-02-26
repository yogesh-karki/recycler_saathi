import React, { useState, useEffect } from 'react'
import { Slider } from 'antd';
import 'antd/dist/antd.css';



const ImapctSlider = () => {

    const [slideNum, setSlideNum] = useState(1)

    function loadData(value) {
      
        setSlideNum(value)
        
    }


    function valueChange(val) {
        return((val * slideNum).toFixed(1))
    }

    let sliderData = [
        {
            number: 1,
            unit: "tons",
            text: "Waste PET bottles recycled",
            img: "./images/icons/bottles.svg",
        },
        {
            number: 1.5,
            unit: "tons",
            text: "Carbon Emission Controlled",
            img: "./images/icons/carbon_emission.svg",
        },
        {
            number: 7.4,
            unit: "cubic yards",
            text: "Landfill space saved",
            img: "./images/icons/districts.svg",
        }
    ]

    useEffect(() => {
        const sliderBtn = document.querySelector('.slider_range .ant-slider-handle')
        const sliderText = `Ton of recycled of PET bottle`
        

        let p = document.createElement("p")
        p.innerText = sliderText

        sliderBtn.appendChild(p)
    },[])

    return (
    <>
        <section className="home_slider">
            <div className="container">
                <div className="head">
           

                        <h3>
                            Till now, we have <strong>recycled 3113 tons of PET bottles</strong>
                        </h3>

                        <p>Just slide to see the impact on every tons of PET bottles recycled</p>
                </div>

                <div className="wrap">
                    {
                        sliderData.map((val,index) => {
                            return(
                                <div className="num_wrap" key={index}>
                                    <div className='num_flex'>
                                  
                                        <div className="inum">
                                            <h4>{valueChange(val.number, null) }</h4>
                                            <h6>{val.unit}</h6>
                                        </div>

                                        <div className="icon">
                                            <img src={val.img} alt="" />
                                        </div>
                                    </div>

                                    <p>{val.text}</p>
                                    
                                </div>
                            )
                        })
                    }

               

                   

                  
               
                </div>

                <div className="slider_range">
                    <Slider min={1} max={3113} tooltipVisible onChange = {loadData} />
        
                </div>
            </div>
        </section>
    </>
  )
}

export default ImapctSlider