import React from 'react'
import "../components/Hero.css"
import Services from './Services'

function Hero() {
  return (
    <div className='hero'>
        <h1>Building Brands to success</h1>
        <p>A solução que integra marketing, tecnologia e estratégia, que a sua empresa precisa.</p>
        <Services/>
    </div>
  )
}

export default Hero
