import React, {useState} from 'react'
import WordRow from './WordRow';
import Keyboard from './Keyboard';

const GameContainer = () => {

    let rowNums = ["1", "2", "3", "4", "5", "6"]
    let youWon = false
    

    const [guess, setGuess] = useState('') //current guess
    const [guessNum, setGuessNum] = useState(1) //which number guess
    const [guessArr, updateGuessArr] = useState(['', '', '', '', '', ''])
    const [submittedArr, updateSubmitArr] = useState([false, false, false, false, false, false])
    

    const correctWord = "CRAAN"

    const handleClick = (letter) => {
        if(guess.length < 5 && letter !== '⌫' && letter !== 'ENTER' && youWon === false){ //add letter
            setGuess(guess + letter)
            updateGuessArr({...guessArr, [guessNum - 1]: guess + letter})
        }
        else if(guessNum > 6)
            alert("You Lose!")
        else if(guess.length === 5 && letter !== '⌫' && letter !== 'ENTER'){ //trying to enter longer word
            alert("No more space")
        }
        else if (letter === '⌫' && guess.length > 0 && youWon === false){ //delete character
            console.log(youWon)
            setGuess(guess.slice(0, -1))
            updateGuessArr({...guessArr, [guessNum - 1]: guess.slice(0, -1)})
        }
        else if (letter === '⌫' && guess.length === 0)
            alert("No letter to remove")
        else{ //when enter is pressed
            if(guess.length !== 5)
                alert("Word too short.")
            else if( correctWord !== guess) { //wrong guess or invalid 
                //alert("Not a valid word or not correct")
                //update array
                updateSubmitArr({...submittedArr, [guessNum - 1]: true})
                setGuess('') //resets guess for next guess
                setGuessNum(guessNum + 1) //go to next row
                if(guessNum === 6)
                    alert("You lose!")
            }
            else{
                updateSubmitArr({...submittedArr, [guessNum - 1]: true})
                alert("You Win!")
                console.log(youWon)
            }
        }
    }

    

  return (
    <div className="App">
      <WordRow rowNum = {rowNums[0]} submitted = {submittedArr[0]} guess={guessArr[0]} correctWord = {correctWord}/>
      <WordRow rowNum = {rowNums[1]} submitted = {submittedArr[1]} guess={guessArr[1]} correctWord = {correctWord}/>
      <WordRow rowNum = {rowNums[2]} submitted = {submittedArr[2]} guess={guessArr[2]} correctWord = {correctWord}/>
      <WordRow rowNum = {rowNums[3]} submitted = {submittedArr[3]} guess={guessArr[3]} correctWord = {correctWord}/>
      <WordRow rowNum = {rowNums[4]} submitted = {submittedArr[4]} guess={guessArr[4]} correctWord = {correctWord}/>
      <WordRow rowNum = {rowNums[5]} submitted = {submittedArr[5]} guess={guessArr[5]} correctWord = {correctWord}/>
      <Keyboard handleClick={handleClick}/>
    </div>
  );
}

export default GameContainer;