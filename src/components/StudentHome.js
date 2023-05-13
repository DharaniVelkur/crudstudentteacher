import React from 'react'
import Navbar from './Navbar'
import Table from './Table'


function StudentHome(props) {
  return (
    <div>
      <Navbar hidden="true" form="Student Form"/>
      <Table info={props.info}  hidden="true" />
    </div>
  )
}

export default StudentHome
