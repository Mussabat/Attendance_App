import './App.css';
import {useState} from 'react'
import From from './Component/From';
import StudentSection from './Component/StudentSection';

function App() {
  const [studentName, setStudentName] = useState('')
  const [allStudentList, setAllStudentList] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [editableStudent, setEditableStudent] = useState(null)
  
  return (
    <div className="App">
     <From
     editMode = {editMode}
     studentName = {studentName}
     setEditMode = {setEditMode}
     setStudentName = {setStudentName}
     allStudentList = {allStudentList}
     setAllStudentList = {setAllStudentList}
     editableStudent = {editableStudent}
     setEditableStudent = {setEditableStudent}
    />
    <StudentSection
        editMode = {editMode}
        studentName = {studentName}
        setEditMode = {setEditMode}
        setStudentName = {setStudentName}
        allStudentList = {allStudentList}
        setAllStudentList = {setAllStudentList}
        editableStudent = {editableStudent}
        setEditableStudent = {setEditableStudent}
      />   

    </div>
  );
}

export default App;
