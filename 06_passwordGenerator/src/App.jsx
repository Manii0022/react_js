import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+={}[]~'"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed ,passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()      // select waala effect dene k liye ... ? is for optional ..to handle null
    passwordRef.current?.setSelectionRange(0,length)     // selects custom length
    window.navigator.clipboard.writeText(password)      // since we are working in core reat, we are able to write window. directly
                                                        // in next.js , due to server side rendering , window object is not available 
  },[password])

  
  return (

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>

      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input
        ref = {passwordRef}
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='password'
          readOnly
        />

        <button 
        onClick ={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>

      </div>
      <div className='flex text-sm gap-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />
          <label >Length: {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => { setNumberAllowed((prev) => !prev) }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => { setCharAllowed((prev) => !prev) }}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>

      </div>
    </div>

  )
}

export default App
