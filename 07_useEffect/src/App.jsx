import { useState, useEffect, useRef, useCallback } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // variation : 1 ... every render
  // useEffect(()=>{
  //   alert("i will run on every render")
  // })

  // variation : 2 ... first render only
  // useEffect(()=>{
  //   alert("i will run on firsts render only")
  // },[])

  // variation : 3 ... every time some variable is updated
  // useEffect(()=>{
  //   alert("count was clicked, hence i ran")     // this will run as soon as the browser is loaded(even before clicking 
  //                         //  the button ) bcoz, count is initialized with 0 and that too is counted as change hence useEffect ran)

  // },[count])

  // variation : 4 ... cleanup fxn
  // useEffect(()=>{
  //   console.log("count changed")
  //   return()=>{
  //     console.log("element unmounted ")
  //   }

  // },[count]) 

  const btn = useRef()

  // console.log(btn.current);  // btn.current is undefined at this moment  because the log runs during the render phase,
  //  before React has had a chance to attach the ref to the <button> element.

  /*
  Thus, Log or access btn.current inside useEffect (or a callback ref) if you need the real DOM node; 
  during the render it will always be undefined.  ie
   */
  useEffect(() => {
    console.log(btn.current);   // <button>…</button>
  }, []);     // this is variation 2 of useEffect ... (above)


  const sayHello = useCallback(() => {
    console.log("hello ", count);
  }, [count])

  const handleClick=()=>{
    sayHello()
    setCount(count+1)
  }

  return (
    <>

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        <button ref={btn}
          onClick={() => {
            setCount((count) => {
              console.log("count is being clicked");
              return count + 1
            })        // explicit return concept
          }}>click me {count}</button>

        <button onClick={handleClick}>Say Hello {count} </button>

      </div>

    </>
  )
}

export default App
