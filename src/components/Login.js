import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    let navigate=useNavigate()
let onsubmithandler=()=>{
    let e=document.getElementById('optionvalue').value
    if(email===""||password===""||e==="select"){
        alert("Fields are mandatory!!!!!")
    }
    else if(e==="student"){
        navigate('/student')
    }else{
      navigate('/teacher')
    }
}

  return (
    <div>
      <form onSubmit={onsubmithandler} className='mt-5 d-flex container text-center text-white bg-secondary flex-column justify-content-center align-items-center'>
        <h1 className='mt-3'>Login Form</h1><br/>
        <div>
        <label htmlFor='email' className='col-4 px-2 text-end'>Email :</label>
        <input type='email' className='col-8' placeholder='Enter Email' value={email} onChange={e=>setEmail(e.target.value)} id='email'></input>
        </div><br/>
        <div>
        <label htmlFor='password'  className='col-4 px-2 text-end'>Password :</label>
        <input type='password' placeholder='Enter Password'  className='col-8' value={password} onChange={e=>setPassword(e.target.value)} id='password'></input>
        </div><br/>
        <select className='mb-3' id='optionvalue'  required>
        <option value="select" >Select</option>
        <option value="student">Iam a student</option>
        <option value="teacher">Iam a teacher</option>
        </select>

        <div>
            <button type='submit' className='btn btn-primary mb-4'>Sign In</button>
        </div>

      </form>
    </div>
  )
}

export default Login
