import React from 'react'
import BannerHalf from '../../components/Banner/BannerHalf'



import './Problems.scss'

const GlobalProblems = () => {
  return (
    <>
        <BannerHalf 
            image='url(./images/global_problem.jpg)'
            subtitle="Problems"
            title="<h3>Global <strong>Problems</strong> </h3>"
        />

    </>
  )
}

export default GlobalProblems