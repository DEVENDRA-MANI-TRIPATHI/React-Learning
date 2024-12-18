import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {

  let [counter,setCounter] = useState(0)
  
  // let counter = 1;
  const addvalue = () => {
   setCounter(counter+1)
  }
  const remove = () => {
    if (counter == 0)
    {
      setCounter(counter)
    }
    else {
      setCounter(counter-1)
    } 
  }
  return (
    
    <>
      <h1>coffee aur mai</h1>
      <h2>counter : {counter}</h2>
      <button onClick={addvalue}> add a value </button>
      <br />
      <button onClick={remove}>remove a value</button>
    </>
  )
}
