import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div style={{ backgroundColor: color }} className="w-full h-screen flex flex-col items-center justify-between text-white p-4">
      <h1 className="text-4xl font-bold mt-10">Welcome to My Fullscreen Section</h1>

      <div className="flex items-end justify-center pb-10 space-x-4 bg-amber-50 p-7 rounded-2xl">
        <button onClick={() => setColor("red")} className="bg-red-500 text-white px-4 py-2 rounded">Red</button>
        <button onClick={() => setColor("green")} className="bg-green-500 text-white px-4 py-2 rounded">Green</button>
        <button onClick={() => setColor("blue")} className="bg-blue-500 text-white px-4 py-2 rounded">Blue</button>
        <button onClick={() => setColor("cyan")} className="bg-cyan-500 text-white px-4 py-2 rounded">Cyan</button>
        <button onClick={() => setColor("yellow")} className="bg-yellow-500 text-black px-4 py-2 rounded">Yellow</button>
      </div>
    </div>
  )
}

export default App
