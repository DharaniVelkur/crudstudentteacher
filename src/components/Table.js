import React from 'react';
import {Link} from 'react-router-dom';


function Table(props) {
let ondelete=(id)=>{
  props.setInfo(props.info.filter(e=>e.id!=id))
  localStorage.setItem('info',JSON.stringify(props.info))
}

  return (
    <div className='overflow-x-scroll'>
      <table className="table container text-center mt-5 table-dark table-striped overflow-x-scroll" >
  <thead>
    <tr>
      <th  scope="col">STUDENT_ID</th>
      <th scope="col">NAME</th>
      <th scope="col">AGE</th>
      <th scope="col">CLASS</th>
      <th scope="col">CGPA</th>
      <th scope="col">EDIT</th>
      <th hidden={props.hidden} scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
    {props.info.map(student=>{
        return (  <tr>
            <th scope="row">{student.id}</th>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.class}</td>
            <td>{student.cgpa}</td>

            <td style={{"cursor":"pointer"}} >
              <Link to={`/student/${student.id}`}>
                <td><i className="fa-regular fa-pen-to-square mx-2"></i></td>
              </Link>
            </td>
            <td hidden={props.hidden} style={{"cursor":"pointer"}} >
                <td onClick={()=>ondelete(student.id)}><i className="fa-solid fa-trash"></i></td>
            </td>
 
          </tr>)
    })}
  
   
  </tbody>
</table>
    </div>
  )
}

export default Table