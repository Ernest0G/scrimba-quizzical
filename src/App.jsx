import { useState } from 'react'
import StartGame from './StartGame'
import './App.css'

function App() {
  const [amountOfQuestions, setAmountOfQuestions] = useState(10);
  const [showStartGame, setShowStartGame] = useState(true);
  const [inputValue, setInputValue] = useState(0);

  const url = `https://opentdb.com/api.php?amount=${amountOfQuestions}&type=multiple`

  function handleStartGame() {
    console.log(inputValue)
    if (inputValue > 0) {
      setShowStartGame(false);
    }
  }

  function handleChoiceSelection() {

  }

  function handleInputChange(event) {
    setInputValue(event.target.value);

  }

  return (
    <div className='App'>
      {showStartGame && <StartGame inputChange={handleInputChange} inputValue={inputValue} onStartGame={handleStartGame} />}
    </div>
  )
}

export default App
