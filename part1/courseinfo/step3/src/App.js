const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = ({part}) => {
  console.log(part)
  const { name, exercises } = part
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({part1, part2, part3}) => {
  console.log({part1, part2, part3})
  return (
    <>
      <Part part={part1}  />
      <Part part={part2}  />
      <Part part={part3}  />
    </>
  )
}

const Total = ({part}) => {
  const result = part.map(e => e.part1.exercises + e.part2.exercises + e.part3.exercises)
  console.log(result)
  return (
    <>
      <p>Number of exercises {result}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const allPart = [{part1, part2, part3}]

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        part={allPart}
      />
    </div>
  )
}

export default App