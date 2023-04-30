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
    console.log(questions)
  }, [showStartGame, questions])


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
            options: [...item.incorrect_answers, item.correct_answer],
            selectedOptionIndex: null,
            isOptionSelected: false
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

  return (
    <div className='App'>
      {showStartGame && <StartGame inputChange={handleInputChange} inputValue={amountOfQuestions} onStartGame={handleStartGame} />}

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
