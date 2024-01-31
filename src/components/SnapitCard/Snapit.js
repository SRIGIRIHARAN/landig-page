import React from 'react'
import "./style.css";
import SnapitCard from './SnapitCard'
import icon1 from '../../assets/icon-1.png'
import icon2 from '../../assets/icon-2.png'
import icon3 from '../../assets/icon-3.png'
import icon4 from '../../assets/icon-4.png'

const Snapit = () => {
  return (
    <div className='snapit-div'>
        <h1>Explore Snapit</h1>
        <div className='snapit-div-cards'>
        <SnapitCard
        icon = {icon1}
        content = "Extensive Game Library"
        description = "Dive into a vast collection of games from action-packed adventure to mind-bending puzzles."
        />
        <SnapitCard
        icon = {icon2}
        content = "Extensive Game Library"
        description = "Dive into a vast collection of games from action-packed adventure to mind-bending puzzles."
        />
        <SnapitCard
        icon = {icon3}
        content = "Extensive Game Library"
        description = "Dive into a vast collection of games from action-packed adventure to mind-bending puzzles."
        />
        <SnapitCard
        icon = {icon4}
        content = "Extensive Game Library"
        description = "Dive into a vast collection of games from action-packed adventure to mind-bending puzzles."
        />
        </div>
    </div>
  )
}

export default Snapit