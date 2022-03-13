import React, { useState, useEffect } from "react";
import "./Problems.scss";
import { DownOutlined } from "@ant-design/icons";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const ProblemAccordian = ({data}) => {
    let value = data

    const [indexValue, setIndexValue] = useState(-1);

    useEffect(() => {
        ScrollTrigger.refresh();
        ScrollTrigger.create({
            trigger: ".prob_card .pictures",
            start: "top top+=10%",
            pin: ".prob_card .pictures .pic_pin",
            endTrigger: ".problems",
            end: "bottom bottom",
        });
    });

    const activeSet = (e, index) => {
        e.preventDefault();
        indexValue === index ? setIndexValue(-1) : setIndexValue(index);
    };

    return (
     
        <div className="prob_card">
            <div className="pictures">
                <div className="pic_pin">
                    {value.map(( val, index) => {
                        return <img className={`${indexValue === index ? "active" : ""} `} src={val.image} key={index} />;
                    })}
                </div>
            </div>

            <div className="wrapper">
                {value.map((val, index) => {
                    return (
                        <div className="accoridan" key={index}>
                            <h4 className={`${indexValue === index ? "active" : ""} acc_title`} onClick={(e) => activeSet(e, index)}>
                                {val.title} <DownOutlined />
                            </h4>
                            <div className={`${indexValue === index ? "active" : ""} acc_content`}>
                                <article dangerouslySetInnerHTML={{ __html: val.content }}></article>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProblemAccordian