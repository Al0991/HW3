import React from 'react'
import '../css/WordRow.css'
import RowSquare from './RowSquare'

const WordRow = (props) => {
    let squareNums = ["1", "2", "3", "4", "5"]
    if(props.submitted === true){ //add colors then render
        let turnedYellow = false
        let turnedGreen = false
        for(let guessCounter = 0; guessCounter < props.guess.length; ++guessCounter){ //loops through guess
            turnedYellow = false //turn false when checking next guessed letter
            turnedGreen = false //
            for(let correctWordCounter = 0; correctWordCounter < props.correctWord.length; ++correctWordCounter){ //checks each letter of guess against correct word
                if(props.guess[guessCounter] === props.correctWord[correctWordCounter] && guessCounter === correctWordCounter){ //will turn green when same letter and in same spot
                    //make letter green for being in correct spot 
                    document.getElementById(props.guess[guessCounter]).style.color = "white"; //change font color
                    document.getElementById(props.guess[guessCounter]).style.backgroundColor = "green";
                    document.getElementById(props.guess[guessCounter]).style.borderColor = "green";

                    //square color changes
                    document.getElementById(props.guess[guessCounter] + props.rowNum + squareNums[guessCounter]).style.color = "white"; //change font color
                    document.getElementById(props.guess[guessCounter] + props.rowNum + squareNums[guessCounter]).style.backgroundColor = "green";
                    document.getElementById(props.guess[guessCounter] + props.rowNum + squareNums[guessCounter]).style.borderColor = "green";
                    turnedGreen = true
                    //coloredGreen[guessCounter] = true
                    
                }
                else if(props.guess[guessCounter] === props.correctWord[correctWordCounter] && guessCounter !== correctWordCounter && turnedGreen === false){ //turn yellow
                    document.getElementById(props.guess[guessCounter]).style.color = "white"; //change font color
                    document.getElementById(props.guess[guessCounter]).style.backgroundColor = "yellow";
                    document.getElementById(props.guess[guessCounter]).style.borderColor = "yellow";

                    //square color changes
                    document.getElementById(props.guess[guessCounter] + props.rowNum + squareNums[guessCounter]).style.color = "white"; //change font color
                    document.getElementById(props.guess[guessCounter] + props.rowNum + squareNums[guessCounter]).style.backgroundColor = "yellow";
                    document.getElementById(props.guess[guessCounter] + props.rowNum + squareNums[guessCounter]).style.borderColor = "yellow";
                    turnedYellow = true
                    //if(props.guess[guessCounter] !== props.correctWord[correctWordCounter + 1])
                    //    break
                }
                else if(turnedYellow === false && turnedGreen === false){// turn grey
                    document.getElementById(props.guess[guessCounter]).style.color = "white"; //change font color
                    document.getElementById(props.guess[guessCounter]).style.backgroundColor = "gray";
                    document.getElementById(props.guess[guessCounter]).style.borderColor = "gray";

                    //square color changes
                    document.getElementById(props.guess[guessCounter] + props.rowNum + squareNums[guessCounter]).style.color = "white"; //change font color
                    document.getElementById(props.guess[guessCounter] + props.rowNum + squareNums[guessCounter]).style.backgroundColor = "gray";
                    document.getElementById(props.guess[guessCounter] + props.rowNum + squareNums[guessCounter]).style.borderColor = "gray";
                }
                else{
                    console.log("you fucking broke it")
                }
            }
        }
    }
    return (
    
        <div className='Row'>
            <RowSquare letter={props.guess[0]} squareNum={squareNums[0]} rowNum={props.rowNum}/>
            <RowSquare letter={props.guess[1]} squareNum={squareNums[1]} rowNum={props.rowNum}/>
            <RowSquare letter={props.guess[2]} squareNum={squareNums[2]} rowNum={props.rowNum}/>
            <RowSquare letter={props.guess[3]} squareNum={squareNums[3]} rowNum={props.rowNum}/>
            <RowSquare letter={props.guess[4]} squareNum={squareNums[4]} rowNum={props.rowNum}/>
        </div>
    )
}

export default WordRow