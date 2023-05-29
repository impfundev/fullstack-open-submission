import { useState } from 'react'

const Title = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

const Button = ({ onClick, Text }) => {
  return (
    <>
      <button onClick={onClick}>{Text}</button>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }

  const all = good + neutral + bad
  const total = good + neutral * 0 + bad * -1
  const average = total / all
  const percentage = 100 * good / all

  return (
    <div>
      <Title text="give feedback" />
      <Button onClick={handleGood} Text="good" />
      <Button onClick={handleNeutral} Text="neutral" />
      <Button onClick={handleBad} Text="bad" />
      <Title text="statistics" />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>percentage {percentage}%</p>
    </div>
  )
}

export default App