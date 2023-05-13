import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentHome from "./components/StudentHome";
import Editpage from "./components/Editpage";
import { useEffect, useState } from "react";
import TeacherHome from "./components/TeacherHome";
import Addstudent from "./components/Addstudent";


function App() {
  let initTodo= [{
    id:1,
    name:"dharani",
    age:24,
    class:9,
    cgpa:8.5
},{
    id:2,
    name:"sai",
    age:27,
    class:10,
    cgpa:9.5 
},
{
    id:3,
    name:"sasi",
    age:10,
    class:5,
    cgpa:5.67
}];
  if(!localStorage.getItem('info')){
  localStorage.setItem('info',JSON.stringify(initTodo))}



const [info, setInfo] = useState(JSON.parse(localStorage.getItem('info')));
useEffect(() => {
  localStorage.setItem("info", JSON.stringify(info));
}, [info])

// console.log(info)
  return (
    <>
      <Router>
      <Routes>
      <Route exact path="/" element={<Login/>}></Route>
       <Route exact path="/student" element={<StudentHome info={info} />}></Route>
       <Route exact path="/teacher" element={<TeacherHome info={info} setInfo={setInfo}/>}></Route>
       <Route exact path="/student/:id" element={<Editpage info={info} setInfo={setInfo}/>}></Route>
       <Route exact path="/teacher/:id" element={<Editpage info={info} setInfo={setInfo}/>}></Route>
       <Route exact path="/teacher/addstudent" element={<Addstudent info={info} setInfo={setInfo}/>}></Route>

      </Routes>
      </Router>
    </>
  );
}

export default App;
