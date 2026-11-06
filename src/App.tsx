import { createContext, useState } from "react"
import A from "./Components/A"

export const CntContext = createContext(0)


const App = () => {
  const [count,setCount]= useState(0)
  return (
<CntContext.Provider value={count}>


    <div><A/>
    <button onClick={()=>setCount((prev)=>prev+1)}>+</button>
    </div>
</CntContext.Provider>
  )
}

export default App