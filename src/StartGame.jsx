import React from 'react'

const StartGame = (props) => {

    return (
        <div className='startgame-container'>
            <div className='startgame-description'>
                <h1 className='startgame-title'>Quizzical</h1>
                <h3 className='startgame-subtitle'>Input the amount of questions you want for the quiz.</h3>
            </div>

            <input
                className='startgame-input'
                type='number'
                onChange={props.inputChange}
                value={props.inputValue}
            />
            <button
                className='startgame-button'
                onClick={props.onStartGame}>
                Start Game
            </button>
        </div>
    )
}

export default StartGame