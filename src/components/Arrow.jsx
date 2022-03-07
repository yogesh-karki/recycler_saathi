import React from 'react'

const LeftArrow = () => {
  return (
    <>
        <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92894 13.1924 1.97919 12.6066 1.3934C12.0208 0.807615 11.0711 0.807615 10.4853 1.3934L0.93934 10.9393ZM64 10.5L2 10.5L2 13.5L64 13.5L64 10.5Z" fill="black"/>
        </svg>

    </>
  )
}

const RightArrow = () => {
    return(
        <>
            <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.0607 13.0607C63.6464 12.4749 63.6464 11.5251 63.0607 10.9393L53.5147 1.3934C52.9289 0.807616 51.9792 0.807616 51.3934 1.3934C50.8076 1.97919 50.8076 2.92894 51.3934 3.51472L59.8787 12L51.3934 20.4853C50.8076 21.0711 50.8076 22.0208 51.3934 22.6066C51.9792 23.1924 52.9289 23.1924 53.5147 22.6066L63.0607 13.0607ZM-1.31134e-07 13.5L62 13.5L62 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="black"/>
            </svg>

        </>
    )
}

export {LeftArrow, RightArrow }