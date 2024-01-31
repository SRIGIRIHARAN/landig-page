import React from 'react'
import "./style.css";
import NavBar from '../Navbar/NavBar'
import hero1 from '../../assets/hero-1.png'
import hero2 from '../../assets/hero-2.png'
import hero3 from '../../assets/hero-3.png'

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <NavBar />
        <div className='hero'>
        <div className='hero-left'>
            <div className='content'>
                <p>Get Ready To Play,Explore Conqeror</p>
            </div>
            <div className='decription'>
                <p>Embark on your gaming journey of discovery and excitment right here, where the world of immersive gameplay</p>
            </div>
            <div className='buttons'>
                <button className='play-btn'>Play Now</button>
                <button className='learn-btn'>Learn More</button>
            </div>
        </div>
        <div className='hero-right'>
            <div className='hero-right-img'>
                <img src={hero1}></img>
            </div>
            <div className='hero-right-img'>
                <img src={hero2}></img>
            </div>
            <div className='hero-right-img'>
                <img src={hero3}></img>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeroSection