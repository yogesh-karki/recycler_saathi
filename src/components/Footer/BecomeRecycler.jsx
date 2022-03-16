import React from 'react'
import './footer.scss'
import {  NavLink } from 'react-router-dom';



import { RightOutlined } from '@ant-design/icons';
const BecomeRecycler = () => {
  return (
    <>
        <div className="suscribe">
            <div className="container">
                <div className="head">
                    <h3>Become a  <strong>Recycler Saathi  </strong></h3>
                    <p> As we continue to recycle PET bottles, improve the livelihood of all waste workers, and engage the local community; our broader goal is to recycle all plastic waste and contribute to the overall sustainable development of Nepal.  Your continuous support has helped us make many positive impacts and we hope you will continue to join us.  </p>

                </div>

                <div className="wrap">
                    <div className="saathi">
                        <div className="img">
                            <img src="./images/become_saathi/bailing_partner.jpg" alt="" />

                        </div>

                        <h4>Become our Baling Partner </h4>
                        <p>
                            Are you operating a recollection and baling center? Or, are you thinking of establishing one? Then, please join us in becoming Recycler Saathi’s baling partner.
                        </p>

                        <NavLink to= "/bailing_partner">Send Request <RightOutlined /></NavLink>
                      
                    </div>

                    <div className="saathi">
                        <div className="img">
                            <img src="./images/become_saathi/Become_a_Recycler_Saathi.jpg" alt="" />

                        </div>

                        <h4>Become a Recycler Saathi </h4>
                        <p>
                        Do you somehow end up collecting a lot of PET bottles? If yes, then please bring your collection to our nearest recollection center to earn some quick cash and an appreciation certificate.      
                        </p>

                        <NavLink to= "/become_recycler_saathi">Schedule an drop off  <RightOutlined /></NavLink>
                           
                      
                    </div>

                    <div className="saathi">
                        <div className="img">
                            <img src="./images/become_saathi/Waste_Smart_School.jpg" alt="" />

                        </div>

                        <h4>Become a Waste Smart School  </h4>
                        <p>
                            According to the World Bank report in 2018, it is estimated that 70% of global waste will increase by 2025 unless urgent action is taken. Therefore, this is the time to educate and engage students on an environmental issue that matters in the present and will matter ten years from now. Join us in becoming a Waste Smart School to mobilize youths of today for a better tomorrow.      
                        </p>

                        <NavLink to= "/become_waste_smart_school">Join the Waste Smart Club  <RightOutlined /></NavLink>

                    </div>

                    

                </div>

            </div>

            
        </div>
    </>
  )
}

export default BecomeRecycler