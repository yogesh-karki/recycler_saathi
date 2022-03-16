import React from 'react'
import { Row, Col } from 'antd';
import BannerHalf from '../../components/Banner/BannerHalf';

import './carrer.scss'
import ScrollTop from '../../components/ScrollTop';

const BecomeWss = () => {
  return (
    <>
        <ScrollTop />

        <BannerHalf 
            image="url(./images/FAQs.jpg)" 
            subtitle="Carrer" 
            title="<h3>Become a <strong>Waste Smart School</strong> </h3>" 

        />

        <div className="form_wrapper">
            <div className="container">
                <div className="head">
                    <h3>Join us in becoming a  <strong>Waste Smart School</strong></h3>
                    <p>
                    According to the World Bank report in 2018, it is estimated that 70% of global waste will increase by 2025 unless urgent action is taken. Therefore, this is the time to educate and engage students on an environmental issue that matters in the present and will matter ten years from now. Join us in becoming a Waste Smart School to mobilize youths of today for a better tomorrow.  
                    </p>
                </div>

                <div className="form">
                    <Row>
                        <Col span={24}>
                            <div className="form_card">
                                <label >Name of school </label>
                                <input type="text" />
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="form_card">
                                <label >Name of contact number </label>
                                <input type="text" />
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="form_card">
                                <label >Contact NUmber </label>
                                <input type="number" />
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="form_card">
                                <label >Address </label>
                                <input type="text" />
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="form_card">
                                <label >Email </label>
                                <input type="email" />
                            </div>
                        </Col>

                        <Col span={24}>
                            <div className="form_card">
                                <label >Your Message </label>
                                <textarea ></textarea>
                            </div>
                        </Col>
                    </Row>
                   
                    <div className="submit_btn">
                        <button>
                            Submit Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BecomeWss