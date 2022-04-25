import React from 'react'
import '../css/RowSquare.css'

const RowSquare = (props) => {
    return (
        <div className='RowSquare' id={props.letter}>{props.letter}</div>
    )
}

export default RowSquare