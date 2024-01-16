import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import img from '../images/Swap-logos.jpeg'
import lastImg from '../images/patternpad.png'
import './style.css'

const Closure = () => {
  return (
    <>
    <div className='closure'>
        <img className='img' src={img} />
        <h2 className='test'>
        © 2023 Swap. All Rights Reserved.

        </h2>

    </div>
    </>
  )
}

export default Closure