import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 5

  let addValue = () => {
    if(counter<20){
      counter+=1
    setCounter(counter)
    }
    else{
      console.log("limit reached");
      
    }
    
  }

  let removeValue =()=>{
    if(counter>0){
    counter = counter -1
    setCounter(counter)
    }
    else{
      console.log("limit reached");
      
    }
  }

  return (

    <>

      <h1>learning react</h1>
      <h2>counter value {counter}</h2>
      <button
        onClick={ addValue }
      >Add Value {counter}</button>

      <br></br>

      <button
      onClick={removeValue}
      >Delete Value {counter}</button>
      <p>footer : {counter}</p>

    </>
  )
}

export default App
