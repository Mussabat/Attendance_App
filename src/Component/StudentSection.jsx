import React from 'react'
import AbsentStudentList from './AbsentStudentList'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'

function StudentSection(props) {

    const togglePresentMode = (studentId) => {
        props.setAllStudentList(props.allStudentList.map((item) => {
          if(item.id === studentId) {
            item.isPresent = !item.isPresent
          }
          return item
        }))
      }
    

  return (
    <div style = {{display : 'flex', justifyContent : 'space-evenly'}} className='student-section'>
        <AllStudentList
        editMode = {props.editMode}
        studentName = {props.studentName}
        setEditMode = {props.setEditMode}
        setStudentName = {props.setStudentName}
        allStudentList = {props.allStudentList}
        setAllStudentList = {props.setAllStudentList}
        editableStudent = {props.editableStudent}
        setEditableStudent = {props.setEditableStudent}
        />
        <PresentStudentList
         allStudentList = {props.allStudentList}
         togglePresentMode = {togglePresentMode}
        />
        <AbsentStudentList
         allStudentList = {props.allStudentList}
         togglePresentMode = {togglePresentMode}
        />
     </div>


  )
}

export default StudentSection