import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Editpage(props) {
  let navigate=useNavigate()
   const {id}=useParams();
   let details=JSON.parse(localStorage.getItem('info')).find(e=>e.id==id)

  
    let [name,setName]=useState(details.name);
    let [age,setAge]=useState(details.age);
    let [classs,setClasss]=useState(details.class);
    let [cgpa,setCgpa]=useState(details.cgpa);



    let onupdate=()=>{  
    //  let newdetails=JSON.parse(localStorage.getItem('info'))
 let updatedDetails=props.info.map(e=> {
  let ecopy=Object.assign({},e)
        if(e.id==id){  
          e.id=id;
          e.name=name;
          e.age=age;
          e.class=classs;
          e.cgpa=cgpa;
        }
        return e;
       })
      props.setInfo(updatedDetails)
    // localStorage.setItem('info',JSON.stringify(props.info))
    navigate('/student');
    }


  return (
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
    <button className='btn btn-primary' onClick={onupdate}>UPDATE</button>
    </div>
  )
}

export default Editpage
