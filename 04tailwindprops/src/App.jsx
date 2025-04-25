import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-blue-500 text-black p-5 rounded-lg">
      <h1 className="text-3xl font-bold">Tailwind CSS is working!</h1>
      <button className="mt-5 px-4 py-2 bg-green-500 rounded hover:bg-green-600">
        Click me
      </button>
    </div>
    <div className="flex justify-center items-center min-h-screen bg-cyan-100">
      <Card
        title="Tailwind Card"
        description="This card is styled with Tailwind CSS. It has a hover animation and is responsive."
        image="https://picsum.photos/id/1025/300/180"
      />
      <Card
        title="Tailwind Card 2"
        description="Card Image"
        image="https://picsum.photos/id/1043/300/180"
      /> 
    </div>
    </>
  )
}

export default App
