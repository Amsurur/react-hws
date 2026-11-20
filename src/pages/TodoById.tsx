import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { api } from './Todos'

const TodoById = () => {
    const {id}  = useParams()

    const [data,setData] = useState({})
    async function getData() {
        try {
            const {data} = await axios.get(api+"/"+id)
            setData(data.data)
        } catch (error) {
            console.error(error);
            
        }
    }

    useEffect(()=>{
     getData()
    },[])
  return (
    <div>

        <h1>{data?.name}</h1>
        <h1>{data?.description}</h1>
       {
        data?.images?.map((e)=>{
            return <img src={"https://to-dos-api.softclub.tj/images/"+e.imageName} alt="" />
        })
       }
    </div>
  )
}

export default TodoById