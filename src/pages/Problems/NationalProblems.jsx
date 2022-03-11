import React from 'react'
import BannerHalf from '../../components/Banner/BannerHalf'



import './Problems.scss'

const NationalProblems = () => {
  return (
    <>
        <BannerHalf 
            image='url(./images/national_problem.jpg)'
            subtitle="Problems"
            title="<h3>National <strong>Problems</strong> </h3>"
        />

    </>
  )
}

export default NationalProblems