import React from 'react'
import "./style.css";
import GameCard from './GameCard'
import game1 from '../../assets/game-1.png'
import game2 from '../../assets/game-2.png'
import game3 from '../../assets/game-3.png'
import game4 from '../../assets/game-4.png'
import game5 from '../../assets/game-5.png'
import game6 from '../../assets/game-6.png'

const Game = () => {
  return (
    <div className='game-div'>
        <div className='game-heading'>
            <p>Discover the Most Popular Games</p>
            <button className='game-btn'>See All</button>
        </div>
        <div className='game-div-cards'>
            <GameCard 
            icon = {game1}
            gameName='POLYGON ARENA'
            gameDescription='Sci-Fi Strategy | PC | Mobile'
            rating = '4.8'
            review = '230'
            download = '1.1'
            />
            <GameCard 
            icon = {game2}
            gameName='BATTLE BIT'
            gameDescription='Sci-Fi Strategy | PC | Mobile'
            rating = '4.9'
            review = '550'
            download = '4.3'
            />
            <GameCard 
            icon = {game3}
            gameName='GANG BEAST'
            gameDescription='Sci-Fi Strategy | PC | Mobile'
            rating = '4.7'
            review = '600'
            download = '2'
            />
            <GameCard 
            icon = {game4}
            gameName='HUMAN FALL FLAT'
            gameDescription='Sci-Fi Strategy | PC | Mobile'
            rating = '4.6'
            review = '800'
            download = '2.5'
            />
            <GameCard 
            icon = {game5}
            gameName='BLANKOS BLOCK PARTY'
            gameDescription='Sci-Fi Strategy | PC | Mobile'
            rating = '4.6'
            review = '770'
            download = '5.1'
            />
            <GameCard 
            icon = {game6}
            gameName='PARTY ANIMALS'
            gameDescription='Sci-Fi Strategy | PC | Mobile'
            rating = '4.5'
            review = '900'
            download = '1'
            />
        </div>
    </div>
  )
}

export default Game