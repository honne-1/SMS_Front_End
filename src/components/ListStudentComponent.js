import React, {useEffect, useState} from "react";
import StudentService from "../service/StudentService";
import {Link} from "react-router-dom";

const ListStudentComponent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
            StudentService.getAllStudents().then(response => {
                setStudents(response.data);
            }).catch(error => {
                console.log(error);
            })
        }, []);

    const deleteStudent = (zid) => {
        StudentService.deleteStudent(zid).then(response => {
            setStudents(students.filter(student => student.zid !== zid));
        }).catch(error => {
            console.log(error);
        })
    }

    return (
    <div className="container">
        <h2 className={"text-center"}>List of Students</h2>
        <Link to="/add-student" className={"btn btn-primary mb-2"} id={"add_btn"}>Add Student</Link>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>zID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Program</th>
                    <th>Stage</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map(
                    student =>
                    <tr key={student.id}>
                        <td>{student.zid}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>{student.contact}</td>
                        <td>{student.programCode}</td>
                        <td>{student.stage}</td>
                        <td>
                            <Link to={`/update-student/${student.zid}`} className={"btn btn-info"}>Update</Link>
                            <button className={"btn btn-danger ml-2"} onClick={() => deleteStudent(student.zid)} style={{marginLeft:"10px"}}>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>


    </div>
  );
}

export default ListStudentComponent;