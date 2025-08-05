import { createContext, useState } from 'react'
import './App.css'
import ChildC from './components/childC'
import ChildB from './components/ChildB'

// Step 1 : create context
const UserContext = createContext()     // UserContext => this will now be available for all to consume 

// Step 2: wrap all the child inside a provider
// Step 3: pass value
// Step 4: consume value inside consumer


// now theme switcher bnayenge
const ThemeContext = createContext()
const PageContext = createContext()

function App() {
  const [user, setUser] = useState({ name: "manish" })    // useState k andar object hai, don't get confused dot(.) se access hongi values ie user.name

  const [theme, setTheme] = useState("light")

  const [page,setPage] = useState("light")

  return (
    // <UserContext.Provider value ={user}>   {/* UserContext ab ChildA access kr skta hai , B A k andar hai toh B bhi kr skta hai 
    //                               , C B k andar hai toh C bhi kr skta hai  */}
    //   <ChildA/>
    // </UserContext.Provider>

    <div id="box">
    <PageContext.Provider value={{user , page , setPage}}>
    <UserContext.Provider value ={user}>
      <ChildB/>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id="container" style={{ backgroundColor: theme === "light" ? "beige" : "black" }}>
        <ChildC />
      </div>

    </ThemeContext.Provider>
    </UserContext.Provider>
    </PageContext.Provider>
    </div>

  )
}

export default App
export { UserContext }      // it is necessary to export all contexts, tbhi consume kr payenge
export { ThemeContext , PageContext }
