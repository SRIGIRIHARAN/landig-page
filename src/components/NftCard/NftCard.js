import React from 'react'
import "./style.css";

const NftCard = ({icon,content,description}) => {
  return (
    <div className='nft-card'>
            <div className='nft-image'>
                <img src={icon}></img>
            </div>
            <div className='content-group'>
                <div className='nft-card-content'>
                    <p>{content}</p>
                </div>
                <div className='nft-card-description'>
                    <p>{description}</p>
                </div>
            </div>
    </div>
  )
}

export default NftCard