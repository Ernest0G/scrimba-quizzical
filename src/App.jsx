import { useEffect, useState } from 'react'
import StartGame from './StartGame'
import QuestionCard from './QuestionCard'
import { nanoid } from 'nanoid'
import './App.css'

function App() {
  const [amountOfQuestions, setAmountOfQuestions] = useState(0);
  const [showStartGame, setShowStartGame] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [questionCards, setQuestionCards] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false)

  const url = `https://opentdb.com/api.php?amount=${amountOfQuestions}&type=multiple`

  useEffect(() => {
    setQuestionCards(questions.map(question => (
      <QuestionCard
        id={question.id}
        key={question.id}
        question={question.question}
        correctAnswer={question.correctAnswer}
        options={question.options}
        selectedOptionIndex={question.selectedOption}
        handleOptionSelection={handleOptionSelection}
      />
    )))
  }, [showStartGame, questions])

  function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  function handleStartGame() {
    if (amountOfQuestions > 0) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const results = data.results;
          const questionsArray = results.map(item => ({
            id: nanoid(),
            question: item.question,
            correctAnswer: item.correct_answer,
            options: shuffleArray([...item.incorrect_answers, item.correct_answer]),
            selectedOptionIndex: null,
            isOptionSelected: false,
            isSelectionCorrect: null
          }))
          setQuestions(questionsArray)
        });
      setShowStartGame(false);
    }
  }

  function handleOptionSelection(id, index) {
    setQuestions(prevState => {
      return prevState.map(question => {
        return question.id === id ? { ...question, selectedOptionIndex: index, isOptionSelected: true } : question
      })
    })
  }

  function handleInputChange(event) {
    setAmountOfQuestions(event.target.value);
  }

  function checkAnswers() {
    if (questions.every(question => question.isOptionSelected === true)) {
      setQuestions(prevState => {
        return prevState.map(question => {
          return question.options[question.selectedOptionIndex] === question.correctAnswer ?
            { ...question, isSelectionCorrect: true }
            :
            { ...question, isSelectionCorrect: false }
        })
      })
      questions.forEach(question => question.options[question.selectedOptionIndex] === question.correctAnswer ?
        setCorrectAnswers(prevCount => prevCount + 1)
        :
        null
      )

      setIsGameOver(true);
    } else {
      alert('Answer each question before submitting this quiz.')
    }
  }

  function restartGame() {
    setShowStartGame(true);
    setIsGameOver(false);
    setCorrectAnswers(0);
  }

  return (
    <div className='App'>
      {!showStartGame ?
        <>
          <div className='questions-container'>
            {questionCards}
          </div>
          <div className="controls">
            {isGameOver && <h1>You scored {correctAnswers}/{questions.length} correct answers</h1>}
            <button className='button' onClick={isGameOver ? restartGame : checkAnswers}>{isGameOver ? 'Play again' : 'Check Answers'}</button>
          </div>

        </>
        :
        <StartGame inputChange={handleInputChange} inputValue={amountOfQuestions} onStartGame={handleStartGame} />
      }
    </div>
  )
}

export default App
