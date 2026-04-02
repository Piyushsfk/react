import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number,setNumber]=useState(true);
  const [char,setChar]=useState(true);
  const [password,setPassword]=useState("");
  const [copied,setCopied]=useState(false)
  // use ref hook
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str+="1234567890";
    if (char) str+="!@#$%^&*()_+={}[]\|~`<>/*"
    for (let i = 0; i <length; i++) {
      let character=Math.floor(Math.random()*str.length);
      pass+=str.charAt(character)
      
    }  setPassword(pass)  ;

  },[length,number,char,setPassword])
  const copyPasswordToclipboard = useCallback(() => {
  setCopied(true);
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
  setTimeout(() => setCopied(false), 2000);
}, [password]);
useEffect(()=>{
  passwordGenerator()
},[length,char,number,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-orange-400 '>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 text-amber-600 bg-white"
        placeholder='password'
        readOnly
        ref={passwordRef}
        /><button onClick={copyPasswordToclipboard} className={`outline-none text-white px-3 py-0.5 shrink-0 ${copied ? 'bg-green-500' : 'bg-blue-700'}`}>{copied ? 'Copied!' : 'Copy'}</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length} </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={number}
          id='numberInput'
          onChange={()=>{
            setNumber((prev)=>
            !(prev));
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
         <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={char}
          id='charInput'
          onChange={()=>{
            setChar((prev)=>
            !(prev));
          }}
          />
          <label htmlFor="CharInput">Special Char</label>
        </div>
      </div>
    </div>
    
    </>
    )
}

export default App
