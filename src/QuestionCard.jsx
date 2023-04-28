import React, { useState } from 'react'
import he from 'he'

const QuestionCard = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState();
    return (
        <div className='question-card'>
            <h2 className='question'>{he.decode(props.question)}</h2>
            <h4>{props.correctAnswer}</h4>
            <div className="questions">
                <button className={`option-button ${isSelected && 'selected-option'}`}>{he.decode(props.options[0])}</button>
                <button className={`option-button ${isSelected && 'selected-option'}`}>{he.decode(props.options[1])}</button>
                <button className={`option-button ${isSelected && 'selected-option'}`}>{he.decode(props.options[2])}</button>
                <button className={`option-button ${isSelected && 'selected-option'}`}>{he.decode(props.options[3])}</button>
            </div>
            <hr />
        </div>
    )
}

export default QuestionCard