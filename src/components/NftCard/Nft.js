import React from 'react'
import "./style.css";
import NftCard from './NftCard'
import nft1 from '../../assets/nft-1.png'
import nft2 from '../../assets/nft-2.png'
import nft3 from '../../assets/nft-3.png'
import nft4 from '../../assets/nft-4.png'

const Nft = () => {
  return (
    <div className='nft-div'>
        <h1 className='nft-head'>RİSE YOUR NFT CHARACTERS</h1>
        <div className='nft-div-cards'>
        <NftCard
        icon = {nft1}
        content = "NFT Name"
        description = "Embark on an epic quest to defeat dragons and save the kingdom in this fantasy RPG."
        />
        <NftCard
        icon = {nft2}
        content = "NFT Name"
        description = "Embark on an epic quest to defeat dragons and save the kingdom in this fantasy RPG."
        like = {true}
        />
        <NftCard
        icon = {nft3}
        content = "NFT Name"
        description = "Embark on an epic quest to defeat dragons and save the kingdom in this fantasy RPG."
        />
        <NftCard
        icon = {nft4}
        content = "NFT Name"
        description = "Embark on an epic quest to defeat dragons and save the kingdom in this fantasy RPG."
        />
        </div>
    </div>
  )
}

export default Nft