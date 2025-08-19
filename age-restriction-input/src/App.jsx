import React, { useRef, useState,useEffect } from 'react'
import Confetti from 'js-confetti'
import './style.css'

const confetti = new Confetti()
const ERR_MSG='age should be 18+'
const App = () => {

 const [isError,setIsError]=useState(false)
    const [text,setText]=useState('')
    const handleChange=(e)=>{
       const value = e.target.value
      setText(value)
        setIsError(value===''?false:value<18)
    }
  return <>
<div >
    <input value={text} type="number" onChange={handleChange}/>
    {isError?ERR_MSG:null}
      </div>
  </>
}


export default App