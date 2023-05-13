import React from 'react'
import Navbar from './Navbar'
import Table from './Table'

function TeacherHome(props) {
  return (
    <div>
      <Navbar  form="Teacher Form"/>
      <Table info={props.info} setInfo={props.setInfo} />
    </div>
  )
}

export default TeacherHome
