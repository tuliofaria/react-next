import { useState } from 'react'

const About = () => {
  const [counter, setCounter] = useState(0)
  const click = () => {
    setCounter(counter +1)
  }
  return (
    <>
      <h1>About us</h1>
      <p>This is a content. {counter}</p>
      <button onClick={click}>Click!</button>
    </>
  )
}
export default About