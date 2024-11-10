import React, { FormEvent, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form';

interface FormData  {
    name: string,
    age:number,
}

function Form() {
    const { register, handleSubmit, formState:{errors} } = useForm<FormData>()
    console.log(register)
    const [person, setPerson] = useState({
        name:"",
        age:"",
    })

    const submitHandler = (data:FieldValues) => {
        console.log("From data from handler: ", data)
    }
    // function handleSubmit(e:FormEvent) {
    //     e.preventDefault();
    //     console.log("submit");
    //     console.log(person);
    // }
  return (
      <>
          <form onSubmit={handleSubmit(submitHandler)} className='w-50 m-auto'>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input {...register("name", { required: true, minLength: 3 })} type="text" id="name" className="form-control" />
                  {errors.name?.type === "required" && <p className='text-danger mt-2'>Name input field is required</p>}
                  {errors.name?.type === "minLength" && <p className='text-danger mt-2'>Name input field required minimum 3 characters.</p>}
              </div>
              <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age</label>
                  <input{...register("age")} type="number" id="age" className="form-control" />
              </div>
              <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
    </>
  )
}

export default Form
