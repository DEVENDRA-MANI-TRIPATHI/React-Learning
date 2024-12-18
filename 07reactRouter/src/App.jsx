import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-500 text-white text-center text-2xl min-h-[50px] shadow-sm p-4 '>Hello From React Router</h1>
    </>
  )
}

export default App
