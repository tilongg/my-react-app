import { useState, useRef} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Profile from './Components/Profile'

function App() {
  let [number, setNumber] = useState(6);
  function normalUpdateCount() {
    // setNumber(number + 1);
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
  }

  function decreaseUpdateCount() {
    setNumber(number - 1);
  }

  const inputRef = useRef(null);
  function checkRef() {
    console.log(inputRef.current.value);
  }

  const vichet = {
    userName: "sovichet",
    occupatoin: "student",
    email: "v70@gmail.com",
    location: "Phnom Penh",
    skills: "js"
  }

  return (
    <>
    <h1>hello world</h1>
    <p>hello</p>
    <div id="center">
      <div>Counter: {number}</div>
      <button onClick={normalUpdateCount}>+</button>
      <button onClick={decreaseUpdateCount}>-</button>
      <input ref={inputRef} onChange={checkRef} type='text' />
    </div>
    <Profile {...vichet}/>
    </>
  )
}

export default App
