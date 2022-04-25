import React from 'react'
import '../css/Keyboard.css'
import KeyboardRow from './KeyboardRow'

const Keyboard = (props) => {


    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const row3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
    return (
        <div className='Keyboard'>
            <KeyboardRow letters = {row1}/>
            <KeyboardRow letters = {row2}/>
            <KeyboardRow letters = {row3}/>
        </div>
    )
}

export default Keyboard