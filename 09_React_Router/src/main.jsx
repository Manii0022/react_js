import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github , {githubInfoLoader} from './components/Github/Github.jsx'
import Error from './components/Error/Error.jsx'

// const router = createBrowserRouter([
//   {
//     path : "/",      // this is the main path 
//     element: <Layout/>,
//     children:[     // yha / k baad aane waale components ayenge ie. children 
//       {
//         path : "",       // this is simply /
//         element: <Home/>
//       },
//       {
//         path : "about",       // // this is  /about
//         element : <About/>
//       },
//       {
//         path : "contact",     // this is  /contact
//         element : <Contact/>
//       }
//     ]
//   }
// ])

// another way of creating router..more readable way 
const router = createBrowserRouter(
  createRoutesFromElements(   // sbse pehla parent path,, fir nesting hoti ja rhi hai 
    <Route path = "/" element={<Layout/>} >
      <Route index={true} element={<Home/>}/>    {/* index={true} is same as path : "" ...index = true is for default path */}
      <Route path='about' element={<About/>}/>   
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route 
      path='github' 
      element={<Github/>}
      loader={githubInfoLoader}
      />
      <Route path='*' element={<Error/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
