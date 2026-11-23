import React from 'react'
import { useForm } from "react-hook-form"

type FormValues = {
    name:string
    desc:string
    email: string
  }
  
const Todos = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = 
      useForm<FormValues>({
        defaultValues: { email: "",name:"",desc:"" },
      })


      const AddSubmit=(values)=>{
console.log(values);

      }

  return (
    <div>

        <form onSubmit={handleSubmit(AddSubmit)} action="">
            <input  {...register("name",{ required: "Name is required",maxLength:{value:2,message:"MAXIMUM 2 LETTERS"},minLength:{value:2,message:"miniMUM 2 LETTERS"} })}  type="text" />
            {errors.name && <div>{errors.name.message}</div> }
            <input {...register("desc")}    type="text" />
            <input {...register("email")}   type="text" />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Todos