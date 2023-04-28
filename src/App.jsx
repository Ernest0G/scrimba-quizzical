import { useEffect, useState } from 'react'
import StartGame from './StartGame'
import QuestionCard from './QuestionCard'
import './App.css'

function App() {
  const [amountOfQuestions, setAmountOfQuestions] = useState();
  const [showStartGame, setShowStartGame] = useState(true);
  const [inputValue, setInputValue] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionCards, setQuestionCards] = useState([]);

  const url = `https://opentdb.com/api.php?amount=${amountOfQuestions}&type=multiple`


  useEffect(() => {
    setAmountOfQuestions(inputValue);
  }, [inputValue])

  useEffect(() => {
    setQuestionCards(questions.map(question => (
      <QuestionCard
        key={question.question}
        question={question.question}
        correctAnswer={question.correct_answer}
        options={[...question.incorrect_answers, question.correct_answer]}
      />
    )))
  }, [showStartGame, questions])


  function handleStartGame() {
    if (inputValue > 0) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setQuestions(data.results);
        });
      setShowStartGame(false);
    }
  }

  function handleOptionSelection() {

  }

  function handleInputChange(event) {
    setInputValue(event.target.value);

  }

  return (
    <div className='App'>
      {showStartGame && <StartGame inputChange={handleInputChange} inputValue={inputValue} onStartGame={handleStartGame} />}

      {!showStartGame &&
        <>
          <div className='questions-container'>
            {questionCards}
          </div>
          <button className='button'>Check Answers</button>
        </>
      }

    </div>
  )
}

export default App
