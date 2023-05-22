const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = ({name, exercises}) => {
  console.log(name, exercises)
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({parts}) => {
  const part = parts.map(part => <Part key={part.name} name={part.name} exercises={part.exercises} />)
  console.log(part)
  return (
    <>
      {part}
    </>
  )
}

const Total = ({parts}) => {
  const exercises = parts.map(part => part.exercises )
  const result = exercises.reduce((a, b) => {
    return a + b
  }, 0)
  console.log(result)
  return (
    <>
      <p>Number of exercises {result}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  console.log(parts)

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App