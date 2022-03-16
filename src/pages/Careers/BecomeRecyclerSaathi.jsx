import React from 'react'
import { Row, Col } from 'antd';
import BannerHalf from '../../components/Banner/BannerHalf';
import { DatePicker } from 'antd';

import './carrer.scss'
import ScrollTop from '../../components/ScrollTop';

const BecomeRecyclerSaathi = () => {
    function onChange(value, dateString) {
        // console.log('Selected Time: ', value);
        // console.log('Formatted Selected Time: ', dateString);
      }
    
    function onOk(value) {
        // console.log('onOk: ', value);
      }

  return (
    <>
        <ScrollTop />

        <BannerHalf 
            image="url(./images/FAQs.jpg)" 
            subtitle="Carrer" 
            title="<h3>Become a <strong>RECYCLER SAATHI</strong> </h3>" 

        />

        <div className="form_wrapper">
            <div className="container">
                <div className="head">
                    <h3>Do you somehow end up <strong>collecting a lot of PET bottles?</strong></h3>
                    <p>
                        If yes, then please bring your collection to our nearest recollection center to earn some quick cash and an appreciation certificate. 
                    </p>
                </div>

                <div className="form">
                    <Row>
                        <Col span={12}>
                            <div className="form_card">
                                <label >Name </label>
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

                        <Col span={8}>
                            <div className="form_card">
                                <label >Schedule a drop off </label>    
                                <DatePicker showTime />
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

export default BecomeRecyclerSaathi