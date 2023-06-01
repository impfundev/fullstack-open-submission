import { useState } from 'react'

const Anecdotes = ({ anecdotes, vote, text }) => {
  return (
    <>
      <h1>{text}</h1>
      <p>{anecdotes}</p>
      <p>has {vote} votes</p>
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Winner = ({ anecdotes, vote, text }) => {
  const highestVotes = Math.max(...vote)
  const winIndex = vote.indexOf(highestVotes)
  const winAnecdote = anecdotes[winIndex]

  console.log(winAnecdote)

  if (highestVotes === 0) {
    return (
      <>
        <h1>{text}</h1>
        <p>There's is no vote</p>
      </>
    )
  }
  return (
    <>
      <h1>{text}</h1>
      <p>{winAnecdote}</p>
      <p>has {highestVotes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const newVotes = [...vote]
    newVotes[selected] += 1
    setVote(newVotes)
    console.log(newVotes)
  }

  const handleAnecdotes = () => {
    let nextAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(nextAnecdote)
  }

  return (
    <div>
      <Anecdotes anecdotes={anecdotes[selected]} vote={vote[selected]} text="Anecdote of the day" />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleAnecdotes} text="next anecdote" />
      <Winner anecdotes={anecdotes} vote={vote} text="Anecdote with most votes" />
    </div>
  )
}

export default App