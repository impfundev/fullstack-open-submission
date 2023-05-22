const Header = ({title}) => {
  console.log({title})
  return (
    <h1>{title}</h1>
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

const Course = ({course}) => {
  const courseName = course.name
  const parts = course.parts
  console.log(course)
  return (
    <>
      <Header title={courseName} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App