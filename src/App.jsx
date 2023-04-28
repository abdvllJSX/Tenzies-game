import {useState, useEffect} from 'react';
import "./styles/app.scss"
import Die from "./components/die"
import { nanoid } from
 
'nanoid

function App() {
  const allNewDice = () => {
    const diceArr = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6)
      diceArr.push({
        value: randomNumber, 
        isHeld: false})
    }
    return diceArr
  }
  const [dice, setDice] = useState(allNewDice())
  const diceElements = dice.map(die => <Die value ={die.value} />)
  const rollDice = () => {
    setDice(allNewDice())
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
