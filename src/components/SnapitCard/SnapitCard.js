import React from 'react'
import "./style.css";

const SnapitCard = ({icon,content,description}) => {
  return (
        <div className='snapit-card'>
            <div className='icons'>
                <img src={icon}></img>
            </div>
            <div className='card-content'>
                <p>{content}</p>
            </div>
            <div className='card-description'>
                <p>{description}</p>
            </div>
        </div>
  )
}

export default SnapitCard