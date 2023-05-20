import { click } from '@testing-library/user-event/dist/click'
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const goodClick = good + 1
    setGood(goodClick)
    console.log(goodClick)
  }

  const handleNeutral = () => {
    const neutralClick = neutral + 1
    setNeutral(neutralClick)
    console.log(neutralClick)
  }

  const handleBad = () => {
    const badClick = bad + 1
    setBad(badClick)
    console.log(badClick)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <h1>statistics</h1>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  )
}

export default App