import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>

      <h1>hello</h1>    {/* h1 Login Profile..these are the children jo ki UserContextProvider = ({children})=>{}  me placeholder the */}
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
