import { useEffect, useState } from 'react'
import StartGame from './StartGame'
import QuestionCard from './QuestionCard'
import './App.css'

function App() {
  const [amountOfQuestions, setAmountOfQuestions] = useState();
  const [showStartGame, setShowStartGame] = useState(true);
  const [inputValue, setInputValue] = useState(0);
  const [questions, setQuestions] = useState([]);

  const url = `https://opentdb.com/api.php?amount=${amountOfQuestions}&type=multiple`


  useEffect(() => {
    setAmountOfQuestions(inputValue);
  }, [inputValue])


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
  function handleChoiceSelection() {

  }

  function handleInputChange(event) {
    setInputValue(event.target.value);

  }

  return (
    <div className='App'>
      {showStartGame && <StartGame inputChange={handleInputChange} inputValue={inputValue} onStartGame={handleStartGame} />}
      {/* <QuestionCard
            question={question.results.question}
            correctAnswer={question.results.correct_answer}
            options={question.results.incorrect_answers.concat(question.results.correct_answer)}
          /> */}

      {!showStartGame && <>
        <div className='questions-container'>
          <QuestionCard
            question={'Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?'}
            correctAnswer={'This'}
            options={['That', 'Those', 'This', 'Their']}
          />
          <QuestionCard
            question={'Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?'}
            correctAnswer={'This'}
            options={['That', 'Those', 'This', 'Their']}
          />
          <QuestionCard
            question={'Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?'}
            correctAnswer={'This'}
            options={['That', 'Those', 'This', 'Their']}
          />
          <QuestionCard
            question={'Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?'}
            correctAnswer={'This'}
            options={['That', 'Those', 'This', 'Their']}
          />
          <QuestionCard
            question={'Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?'}
            correctAnswer={'This'}
            options={['That', 'Those', 'This', 'Their']}
          />
        </div>
        <button className='button'>Check Answers</button>
      </>
      }

    </div>
  )
}

export default App
