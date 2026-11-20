import React, { useEffect, useState } from 'react'
import axios from "axios"
const Crud = () => {
  const api = "https://6788f5c12c874e66b7d708f0.mockapi.io/users"
const [data,setData] = useState([])
async function getData() {
  try {
    const {data} = await axios.get(api)
    setData(data)
  } catch (error) {
    console.error(error);
    
  }
}


useEffect(()=>{

  
    getData()
  return ()=>{

  }
},[])

  return (
    <div>

      {
        data.map((e)=>{
return <div>
  <h1>{e.name}</h1>
</div>
        })
      }
    </div>
  )
}

export default Crud