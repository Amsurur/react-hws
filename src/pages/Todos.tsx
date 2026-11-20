import { CardImage } from '@/Components/CardImage'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const api ="https://to-dos-api.softclub.tj/api/to-dos"
export const imageApi ="https://to-dos-api.softclub.tj/images/"
const Todos = () => {
    const [data,setData] = useState([])
    const [elem,setElem] = useState({id:null,name:"",description:""})
async function getTodos() {
    try {
        const {data} = await axios.get(api)
        setData(data.data)
    } catch (error) {
        console.error(error);
        
    }
}
async function editTodos(newObj) {
    try {
        await axios.put(api,newObj)
        getTodos()
    } catch (error) {
        console.error(error);
        
    }
}
async function addTodos(newObj) {
    try {
        await axios.post(api,newObj)
        getTodos()
    } catch (error) {
        console.error(error);
        
    }
}

const handleSubmit=(e)=>{
e.preventDefault()
const obj={
    id:elem.id,
    name:e.target.name.value,
    description:e.target.description.value
}
editTodos(obj)
setElem({id:null,name:"",description:""})
}
const handleAddSubmit=(e)=>{
    e.preventDefault()
    const formdata = new FormData()
   formdata.append("Name",e.target.name.value)
   formdata.append("Description",e.target.description.value)
   formdata.append("Images",e.target.image.files[0])

    addTodos(formdata)
    e.target.reset()
    }

useEffect(()=>{
getTodos()

},[])

  return (
    <div>

{
    elem.id?
    <div>
<h1>EDIT FORM</h1>
    <form onSubmit={handleSubmit} action="">
    <input defaultValue={elem.name} name='name' type="text" />
    <input defaultValue={elem.description} name='description' type="text" />
    <button type='submit'>submit</button>
</form>
    </div>
:null
}

<h1>ADD FORM</h1>
<form onSubmit={handleAddSubmit} action="">
<input type="text" name='name'/>
<input type="text" name='description' />
<input type="file" name='image' />
<button type='submit'>submit</button>
</form>


<div className='grid grid-cols-4'>
        {
            data.map((e)=>{
                return <CardImage e={e} setElem={setElem} name={e.name} status={e.isCompleted} images={e?.images} desc={e.description}/>
            })
        }

</div>

    </div>
  )
}

export default Todos