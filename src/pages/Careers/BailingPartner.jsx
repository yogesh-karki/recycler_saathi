import React from 'react'
import { Row, Col } from 'antd';
import BannerHalf from '../../components/Banner/BannerHalf';

import './carrer.scss'
import ScrollTop from '../../components/ScrollTop';

const BailingPartner = () => {
  return (
    <>
        <ScrollTop />

        <BannerHalf 
            image="url(./images/FAQs.jpg)" 
            subtitle="Carrer" 
            title="<h3>Become our <strong>Bailing Partner</strong> </h3>" 

        />

        <div className="form_wrapper">
            <div className="container">
                <div className="head">
                    <h3>Are you operating a <strong>recollection and baling center?</strong></h3>
                    <p>
                        Or, are you thinking of establishing one? Then, please join us in becoming Recycler Saathi’s baling partner.
                    </p>
                </div>

                <div className="form">
                    <Row>
                        <Col span={12}>
                            <div className="form_card">
                                <label >Name of individual/organization </label>
                                <input type="text" />
                            </div>
                        </Col>

                        <Col span={12}>
                            <div className="form_card">
                                <label >Contact Number </label>
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

export default BailingPartner