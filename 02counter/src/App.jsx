import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function addValue()
  {
    if(counter===25)
      {
        alert("You Can't add value more then 25 Please Remove Value");
      }else
      {
        setCounter(counter+1);
      }
  }
  
  function removeValue()
  {
    if(counter===0)
    {
      alert("You Can't remove value less then Zero Please Add Value");
    }else
    {
      setCounter(counter-1);
    }
   
  }

  return (
    <>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button><br/><br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
