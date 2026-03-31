import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card7 from './components/card2'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Piyush",
    age:"21"
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Frontend</h1>
    <Card7 username="Nukes" okong={myObj}/>
    <Card   okong={myObj}/>
    </>
  )
}

export default App