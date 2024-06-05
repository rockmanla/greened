import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>WELCOMES FRIENDS</h2>
            <div>
                <div className="hero-hand-icon">
                    <p></p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>fresh air</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Best Pick</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />

        </div>
    </div>
  )
}

export default Hero