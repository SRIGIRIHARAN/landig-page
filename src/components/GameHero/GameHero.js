import React from 'react'
import "./style.css";
import star from '../../assets/star.png'

const GameHero = () => {
  return (
    <div className='game-slide'>
        <div className='game-hero'>
            <div className='game-hero-content'>
                <p className='game-hero-heading'>BLANKOS BLOCK PARTY</p>
                <p className='game-heading-description'>Action-Adventure | PC | Mobile</p>
            </div>
            <div className='game-hero-decription'>
                <p>Immerse yourself in a neon-soaked cyberpunk world, battling rogue AI and hackers in this action-packed adventure.</p>
            </div>
            <div className='game-rating-div'>
                <div className='game-div-left'>
                    <div className='star'>
                        <img src={star}></img>
                    </div>
                    <div className='game-review'>
                        <p className='dark'>4.6/5</p>
                        <p className='light' style={{width:"100%"}}>650K Reviews</p>
                    </div>
                </div>
                <div className='game-div-right'>
                    <p className='dark'>982K</p>
                    <p className='light'>Downloads</p>
                </div>
            </div>
        </div>  
        <div className='slider'>
            <div className='silder-active'></div>           
            <div className='silder-inactive'></div>           
            <div className='silder-inactive'></div>           
            <div className='silder-inactive'></div>           
        </div>          
    </div>
  )
}

export default GameHero