import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
// let counter=15;
// const addValue=()=>{
// console.log("value added",Math.random());
let [counter,setCounter]=useState(0)
const addValue=()=>{
  // counter +=1;
  if(counter>19){
    console.log("stop")
    return;
  }
    setCounter(counter+1);
  // console.log("clicked",counter);
}
const removevalue=()=>{
  if(counter<1){
    console.log("stop")
    return;
    }
     setCounter(counter-1);
  // console.log("clicked",counter);
}
  return (
    <>
    <h1>Piyush aur carrer barbad</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add Value:{counter}</button>
    <br/>
    <button onClick={removevalue}>Remove Value:{counter}</button>
    <p>{counter}</p>
</>
  )
}

export default App
