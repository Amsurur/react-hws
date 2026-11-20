import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
export const api = "https://to-dos-api.softclub.tj/api/to-dos"
const Todos = () => {
    const [data,setData] = useState([])
    const navigate = useNavigate()
    async function getData() {
        try {
            const {data} = await axios.get(api)
            setData(data.data)
        } catch (error) {
            console.error(error);
            
        }
    }
    const handleNavigate=(id)=>{
      navigate(`/todos/${id}`)
    }

    useEffect(()=>{
     getData()
    },[])
  return (
    <div>


        {
            data.map((e)=>{
             return   <div>
                    <h1>{e.name}</h1>
                    <button onClick={()=>handleNavigate(e.id)}>info</button>
                    <div className='flex gap-4'>
                        {
                         e?.images?.map((image)=>{
                            return <img className='w-10' src={"https://to-dos-api.softclub.tj/images/"+image.imageName} alt="" />
                        })
                    }
                        </div>
                </div>
            })
        }
    </div>
  )
}

export default Todos