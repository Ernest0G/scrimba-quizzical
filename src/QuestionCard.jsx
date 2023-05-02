import React, { useEffect, useState } from 'react'
import he from 'he'

const QuestionCard = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectionOutcome,setSelectionOutcome] = useState(null);
    const [correctAnswer,setCorrectAnswer] = useState(props.correctAnswer);

    function optionSelect(index) {
        props.handleOptionSelection(props.id, index);
        setSelectedOption(index)
    }

    function displayCorrectAnswer(index){
        if(correctAnswer === props.options[index] && props.isGameOver){
            return 'correct selected-option'
        }
    }

    useEffect(()=>{
        if(props.isSelectionCorrect === true){
            setSelectionOutcome('correct')
        }else{
            setSelectionOutcome('incorrect')
        }
    },[props.isSelectionCorrect])

    return (
        <div className='question-card'>
            <h2 className='question'>{he.decode(props.question)}</h2>

            <div className="questions">
                <button
                    onClick={() => optionSelect(0)}
                    className={`option-button ${selectedOption === 0 && `selected-option ${props.isSelectionCorrect !== null && selectionOutcome}`}
                    ${displayCorrectAnswer(0)}`}> 
                    {he.decode(props.options[0])}
                </button>
                <button
                    onClick={() => optionSelect(1)}
                    className={`option-button ${selectedOption === 1 && `selected-option ${props.isSelectionCorrect !== null && selectionOutcome}`}
                    ${displayCorrectAnswer(1)}`}>
                    {he.decode(props.options[1])}
                </button>
                <button
                    onClick={() => optionSelect(2)}
                    className={`option-button ${selectedOption === 2 && `selected-option ${props.isSelectionCorrect !== null && selectionOutcome}`}
                    ${displayCorrectAnswer(2)}`}>
                    {he.decode(props.options[2])}
                </button>
                <button
                    onClick={() => optionSelect(3)}
                    className={`option-button ${selectedOption === 3 && `selected-option ${props.isSelectionCorrect !== null && selectionOutcome}`}
                    ${displayCorrectAnswer(3)}`}>
                    {he.decode(props.options[3])}
                </button>
            </div>
            <hr />
        </div>
    )
}

export default QuestionCard