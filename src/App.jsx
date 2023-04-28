import { useState, useEffect } from 'react';
import "./styles/app.scss"
import Die from "./components/die"
import { nanoid } from "nanoid"

function App() {
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
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die :
      generateNewDie()
    }))
  }
  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={rollDice}>roll</button>
    </main>
  )
}

export default App
