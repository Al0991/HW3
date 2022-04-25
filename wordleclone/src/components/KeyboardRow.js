import React from 'react'
import '../css/KeyboardRow.css'

const KeyboardRow = (props) => {
    const row = props.letters.map((letter, index) => {
        return(
            <button key={index} className='letter' id={letter}>{letter}</button>
        )    
    })
    return( 
        <div className='KeyboardRow'>{row}</div>
    )
}

export default KeyboardRow