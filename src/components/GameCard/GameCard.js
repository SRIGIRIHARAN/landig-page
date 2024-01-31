import React from 'react'
import "./style.css";
import star from '../../assets/star.png'


const GameCard = ({icon,gameName,gameDescription,rating,review,download}) => {
  return (
    <div className='game-card'>
        <div className='game-img'>
            <img src={icon}></img>
        </div>
        <div className='game-content'>
            <div className='game-name'>{gameName}</div>
            <div className='game-description'>{gameDescription}</div>
        </div>
        <div className='rating-div'>
            <div className='rating-div-left'>
                <div className='star'>
                    <img src={star}></img>
                </div>
                <div className='review'>
                    <p className='dark'>{rating}/5</p>
                    <p className='light'>{review}K Reviews</p>
                </div>
            </div>
            <div className='rating-div-right'>
                <p className='dark'>{download}M</p>
                <p className='light'>Downloads</p>
            </div>
        </div>
    </div>
  )
}

export default GameCard