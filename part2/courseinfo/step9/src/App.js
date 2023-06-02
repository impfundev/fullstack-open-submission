const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ total }) => <p>Number of exercises {total}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => <Part part={part} key={part.id} />)}
    </>
  )
}

  const Course = ({course}) => {
    const {parts, name} = course
    const initialValue = 0
    const exercise = parts.map(part => part.exercises)
    const total = exercise.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    )
    return (
      <>
        <Header name={name} />
        <Content parts={parts} />
        <Total total={total} />
      </>
    )
  }

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  console.log(courses)
  return (
    <>
      {courses.map(course =>
          <Course course={course} key={course.id} />
      )}
    </>
  )
}

export default App