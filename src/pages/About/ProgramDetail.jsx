import React from 'react'

import { useLocation } from 'react-router-dom'
import ScrollTop from '../../components/ScrollTop'

const ProgramDetail = () => {
    const location = useLocation()
    const  {detail}  = location.state

    return (
        <>
            <ScrollTop />

            <h1>{detail.title}</h1>
        </>
    )
}

export default ProgramDetail