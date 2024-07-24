import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  let [counter, setCounter] = useState(15)
  

  // let counter = 15

    // const addValue = () => {
    //   console.log("clicked", counter);
    //   // counter = counter + 1;
    //   setCounter(counter + 1)
    // }
     
    //  const removeValue = () => {
    //      setCounter(counter -1)
    //  }

       // assingment is number should not excessed more than 20 or less then 0

     const addcnt = () => {
            if(counter < 20 ) {
              setCounter(counter +1);
            }
     }

     const remcnt = () => {
           if(counter > 0){
            setCounter(counter - 1);
           }
     }

  return (
    <>
     
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter} </h2>

     <button 
      onClick={addcnt}
     >Add value {counter}</button>
     <br/>
     <button
       onClick={remcnt}
     >remove value {counter}</button>
    </>
  )
}

export default App
