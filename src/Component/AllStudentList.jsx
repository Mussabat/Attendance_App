import React from 'react'

function AllStudentList(props) {

    const editHandler = (studentId) => {
        const toBeEditedStudent = props.allStudentList.find((item) => item.id === studentId)
        props.setEditMode(true)
        props.setEditableStudent(toBeEditedStudent)
        props.setStudentName(toBeEditedStudent.name)
      }


      const deleteStudentHandler = (studentId) => {
        props.setAllStudentList(props.allStudentList.filter(student => student.id !== studentId))
    
      }

      const presentHandler = (studentId) => {
        const item = props.allStudentList.find((student) => student.id === studentId)
    
        if(item.ispresent === true) {
          alert('The Student is already in the present list')
        }
        else if(item.ispresent === false) {
          alert('The Student is already in the absent list')
        }
        else if(item.isPresent === undefined) {
          props.setAllStudentList(props.allStudentList.map((person) => {
            if(person.id === studentId) {
              person.isPresent = true;
            }
            return person
          }))
        }
      }

      const absentHandler = (studentId) => {
        const item = props.allStudentList.find((student) => student.id === studentId)
        if (item.isPresent === true) {
          alert('The student is already in the present List')
        } else if (item.isPresent === false) {
          alert('The student is already in the absent List')
        } else if (item.isPresent === undefined) {
          props.setAllStudentList(props.allStudentList.map((person) => {
            if (person.id === studentId) {
              person.isPresent = false;
            }
            return person
    
          }))
        }
      }
      

  return (
    <div style = {{border : '4px solid #000000'}} className='all-students'>
        <h1>All Student List</h1>
        {props.allStudentList.map((item) => (
          <li>
            <span>{item.name}</span>
            <button onClick = {() => editHandler(item.id)}>Edit</button>
            <button onClick = {() => deleteStudentHandler(item.id)}>Delete</button>
            <button onClick = {() => presentHandler(item.id)}>Present</button>
            <button onClick = {() => absentHandler(item.id)}>Absent</button>
          </li>
        )) 

        }
      </div>
      
  )
}

export default AllStudentList