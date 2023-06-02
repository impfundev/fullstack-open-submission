const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ total }) => <p>Number of exercises {total}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />      
  </>

  const Course = ({course}) => {
    const {parts, name} = course
    const initialValue = 0
    const exercise = parts.map(part => part.exercises)
    const total = exercise.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    )

    console.log(exercise)
    console.log(total)
    return (
      <>
        <Header name={name} />
        <Content parts={parts} />
        <Total total={total} />
      </>
    )
  }

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App