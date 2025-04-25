import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "~!@#$%^&*(){}[]=+";

    for (let index = 0; index < length; index++) {

      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPassToClipbboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);

  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>

      <div className='w-full max-w-md mx-auto bg-gray-900 shadow-lg rounded-xl px-6 py-8 my-10'>
        <h1 className='text-2xl font-semibold text-center text-white mb-6'>
          🔐 Password Generator
        </h1>

        <div className='flex items-center border border-gray-600 rounded-lg overflow-hidden shadow-sm bg-white'>
          <input
            type='text'
            value={password}
            className='w-full px-4 py-2 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400'
            placeholder='Generated Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassToClipbboard}
            className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 transition-colors duration-200'>
            Copy</button>
        </div>
        <div className='flex flex-col space-y-2 mt-6'>
          <label className='text-white text-sm font-medium'>
            Length: {length}
          </label>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500'
          />
        </div>
        <div className="flex justify-between items-center mt-6">
          {/* Numbers */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed(prev => !prev)}
              className="accent-orange-500 h-4 w-4 cursor-pointer"
            />
            <label htmlFor="numberInput" className="text-white text-sm font-medium">
              Numbers
            </label>
          </div>

          {/* Characters */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => setCharacterAllowed(prev => !prev)}
              className="accent-orange-500 h-4 w-4 cursor-pointer"
            />
            <label htmlFor="characterInput" className="text-white text-sm font-medium">
              Characters
            </label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App



{/* <button
  onClick={() => navigator.clipboard.writeText(password)}
  className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 transition-colors duration-200'
>
  Copy
</button> */}

