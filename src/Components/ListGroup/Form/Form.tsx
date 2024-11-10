import React, { FormEvent, useState } from 'react'

function Form() {
    const [person, setPerson] = useState({
        name:"",
        age:"",
    })
    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        console.log("submit");
        console.log(person);
    }
  return (
      <>
          <form onSubmit={(event)=>handleSubmit(event)} className='w-50 m-auto'>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input onChange={(event) => setPerson({ ...person, name: event.target.value })}
                      value={person.name} type="text" id="name" className="form-control" />
              </div>
              <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age</label>
                  <input onChange={(event) => setPerson({ ...person, age: event.target.value })}
                      value={person.age} type="number" id="age" className="form-control" />
              </div>
              <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
    </>
  )
}

export default Form
