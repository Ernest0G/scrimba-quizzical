import React from 'react'

const QuestionCard = (props) => {
    return (
        <div className='question-card'>
            <h2 className='question'>{props.question}</h2>
            <div className="questions">
                {/* <button className='option-button'>{props.options[0]}</button>
                <button className='option-button'>{props.options[1]}</button>
                <button className='option-button'>{props.options[2]}</button>
                <button className='option-button'>{props.options[3]}</button> */}
                <button className='option-button'>Cabbage Patch Kids</button>
                <button className='option-button'>Transformers</button>
                <button className='option-button'>Care Bears</button>
                <button className='option-button'>Rubik's Cube</button>
            </div>
            <hr />
        </div>
    )
}

export default QuestionCard