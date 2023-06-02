import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

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

export default Course