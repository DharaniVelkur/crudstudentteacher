import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Addstudent(props) {
    let navigate=useNavigate();
    let [name,setName]=useState("");
    let [age,setAge]=useState("");
    let [classs,setClasss]=useState("");
    let [cgpa,setCgpa]=useState("");

//add a student
let onadd=()=>{
    let addobj={
        id:props.info.length+1,
        name:name,
        age:age,
        class:classs,
        cgpa:cgpa
    }
   props.setInfo([...props.info,addobj])
   navigate('/teacher')
}

  return (
    <div>
      <div className='mt-5 d-flex container text-center text-white  flex-column justify-content-center align-items-center'>

<h3>Student details</h3><br/>
<div>
  <label htmlFor='name'>Name :</label>
  <input type='text' value={name} onChange={e=>setName(e.target.value)} id='name'></input>
</div><br/>
<div>
  <label htmlFor='age'>Age :</label>
  <input id='name' type='number' onChange={e=>setAge(e.target.value)} value={age}></input>
</div><br/>
<div>
  <label htmlFor='classs'>Class :</label>
  <input id='classs' type='text' value={classs} onChange={e=>setClasss(e.target.value)}></input>
</div><br/>
<div>
  <label htmlFor='cgpa'>CGPA :</label>
  <input id='cgpa' type='text' value={cgpa} onChange={e=>setCgpa(e.target.value)}></input>
</div><br/>
<button className='btn btn-primary' onClick={onadd} >Add</button>
</div>
    </div>
  )
}

export default Addstudent
