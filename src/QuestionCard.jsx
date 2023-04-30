import React, { useEffect, useState } from 'react'
import he from 'he'

const QuestionCard = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);

    function optionSelect(index) {
        props.handleOptionSelection(props.id, index);
        setSelectedOption(index)
    }

    return (
        <div className='question-card'>
            <h2 className='question'>{he.decode(props.question)}</h2>
            {/* <h4>{props.correctAnswer}</h4> */}
            <div className="questions">
                <button
                    onClick={() => optionSelect(0)}
                    className={`option-button ${selectedOption === 0 && 'selected-option'}`}>
                    {he.decode(props.options[0])}
                </button>
                <button
                    onClick={() => optionSelect(1)}
                    className={`option-button ${selectedOption === 1 && 'selected-option'}`}>
                    {he.decode(props.options[1])}
                </button>
                <button
                    onClick={() => optionSelect(2)}
                    className={`option-button ${selectedOption === 2 && 'selected-option'}`}>
                    {he.decode(props.options[2])}
                </button>
                <button
                    onClick={() => optionSelect(3)}
                    className={`option-button ${selectedOption === 3 && 'selected-option'}`}>
                    {he.decode(props.options[3])}
                </button>

            </div>
            <hr />
        </div>
    )
}

export default QuestionCard