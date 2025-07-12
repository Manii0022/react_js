import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA'

// Step 1 : create context
const UserContext = createContext()     // UserContext => this will now be available for all to consume 

// Step 2: wrap all the child inside a provider
// Step 3: pass value
// Step 4: consume value inside consumer

function App() {
  const [user , setUser] = useState({name:"manish"})    // useState k andar object hai, don't get confused dot(.) se access hongi values ie user.name

  return (
    <UserContext.Provider value ={user}>   {/* UserContext ab ChildA access kr skta hai , B A k andar hai toh B bhi kr skta hai 
                                  , C B k andar hai toh C bhi kr skta hai  */}
      <ChildA/>
    </UserContext.Provider>
  )
}

export default App
export {UserContext}      // it is necessary to export all contexts, tbhi consume kr payenge
