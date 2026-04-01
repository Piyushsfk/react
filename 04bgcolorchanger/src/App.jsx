import {useState} from "react"
function App() {
  const [color,setcolour ] = useState("white")

  return (
   <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
          <button onClick={()=>setcolour("red")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>red</button>
      <button onClick={()=>setcolour("green")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
<button onClick={()=>setcolour("blue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
<button onClick={()=>setcolour("black")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>black</button>
<button onClick={()=>setcolour("grey")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}}>grey</button>
<button onClick={()=>setcolour("pink")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>pink</button>
<button onClick={()=>setcolour("brown")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}>brown</button>
      </div></div>
      
   </div>
  )
}

export default App 