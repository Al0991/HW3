import React from 'react'
import '../css/WordRow.css'
import RowSquare from './RowSquare'

const WordRow = (props) => {
    return (
    
        <div className='Row'>
            <RowSquare letter={props.guess[0]}/>
            <RowSquare letter={props.guess[1]}/>
            <RowSquare letter={props.guess[2]}/>
            <RowSquare letter={props.guess[3]}/>
            <RowSquare letter={props.guess[4]}/>
        </div>
    )
}

export default WordRow