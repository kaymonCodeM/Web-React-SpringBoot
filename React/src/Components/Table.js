
import React from 'react'
import Delete from '../Service/Delete'

const deleteStudent = (studentId) =>{
    Delete(studentId)
    window.location.href = "http://localhost:3000/";
}

export const Table = ({students}) => {

  return (
    <div className="Container mt-5">
    <table className="table table-striped">
        <thead>
            <tr>
                <td> Student Id</td>
                <td> Student Name</td>
                <td> Student Age</td>
                <td> Student Email</td>
                <td> Delete </td>
            </tr>
        </thead>
        <tbody>
            {
                students.map(
                    student =>
                        <tr key={student.id}>
                            <td> {student.id}</td>
                            <td> {student.name}</td>
                            <td> {student.age}</td>
                            <td> {student.email}</td>
                            <td>
                            <button onClick = {() => deleteStudent(student.id)}>x</button>
                            </td>
                        </tr>
                )
            }
        </tbody>
    </table>
</div>
  )
}

export default Table
