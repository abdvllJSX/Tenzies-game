import { useState, useEffect } from 'react';
import "./styles/app.scss"
import Die from "./components/die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

function App() {
  const [tenzies, setTenzies] = useState(false)


  function generateNewDie() {
    const randomNumber = Math.ceil(Math.random() * 6)
    return {
      value: randomNumber,
      isHeld: false,
      id: nanoid()
    }
  }
  const allNewDice = () => {
    const diceArr = []
    for (let i = 0; i < 10; i++) {
      diceArr.push(generateNewDie())
    }
    return diceArr
  }
  const [dice, setDice] = useState(allNewDice())

  useEffect(() => {
    const aLLHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => firstValue === die.value)
    if (aLLHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice])
  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {

      return die.id === id ? {
        ...die,
        isHeld: !die.isHeld
      } :
        die
    })
    )
  }
  const diceElements = dice.map(die => <Die
    key={die.id}
    value={die.value}
    isHeld={die.isHeld}
    handleHoldDice={() => holdDice(die.id)}
  />)

  const rollDice = () => {
    if (!tenzies) {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? die :
          generateNewDie()
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice)
    }


  }
  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={rollDice}>{tenzies ? "New Game" : "roll"}</button>
    </main>
  )
}

export default App
