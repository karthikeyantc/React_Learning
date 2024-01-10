import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 0;
  const [counter, setCounter] = useState(0); 
  const increaseValue = () => {
    // setCounter(counter + 1);
    setCounter((previousValue) => previousValue + 1);
    setCounter((previousValue) => previousValue + 1);

  }
  const decreaseValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App
