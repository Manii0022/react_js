import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from `./components/Card`

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {        // these can be passed in <Card  user = {myObj} />
  //   name : "manish",
  //   age : 25
  // }
  // let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>learning react with tailwind</h1>
      <Card  username ="manish" />
      <Card />
    </>
  )
}

export default App
