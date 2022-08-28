import React, {useEffect, useState} from "react";
import StudentService from "../service/StudentService";
import {useNavigate, useParams} from "react-router-dom";


const StudentComponent = () => {
    const [zid, setZid] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [programCode, setProgramCode] = useState(0);
    const [stage, setStage] = useState(0);

    const navigate = useNavigate();
    const {Zid} = useParams();

    function saveStudent(e) {
        e.preventDefault();

        const student = {zid, firstName, lastName, email, contact, programCode, stage};

        if (Zid) {
            StudentService.updateStudent(Zid, student).then(response => {
                navigate("/students");
            }).catch(error => {
                console.log(error);
            })
        } else {
            StudentService.addStudent(student).then(response => {
                navigate("/students");
            }).catch(error => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        if (Zid) {
            StudentService.getStudentById(Zid).then(response => {
                const student = response.data;
                setZid(student.zid);
                setFirstName(student.firstName);
                setLastName(student.lastName);
                setEmail(student.email);
                setContact(student.contact);
                setProgramCode(student.programCode);
                setStage(student.stage);
            }).catch(error => {
                console.log(error);
            })
        }
    }, []);

    const handleZidChange = (e) => {
        setZid(e.target.value);
    }

    const handleProgramCodeChange = (e) => {
        setProgramCode(e.target.value);
    }

    const handleStageChange = (e) => {
        setStage(e.target.value);
    }

    const title = () => {
        if (Zid) {
            return <h2 className={"text-center"}>Update Student</h2>
        } else {
            return <h2 className={"text-center"}>Add Student</h2>
        }
    }

    return (
        <div>
            <br/> <br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label>zID</label>
                                    <input type={"number"} placeholder="zID" name="zid" className="form-control" value={zid} onChange={handleZidChange}/>
                                    <label>First Name</label>
                                    <input placeholder="First Name" name="firstName" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                                    <label>Last Name</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)}/>
                                    <label>Email</label>
                                    <input placeholder="Email" name="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
                                    <label>Contact</label>
                                    <input placeholder="Contact" name="contact" className="form-control" value={contact} onChange={e => setContact(e.target.value)}/>
                                    <label>Program Code</label>
                                    <input type={"number"} placeholder="Program Code" name="programCode" className="form-control" value={programCode} onChange={handleProgramCodeChange}/>
                                    <label>Stage</label>
                                    <input type={"number"} placeholder="Stage" name="stage" className="form-control" value={stage} onChange={handleStageChange}/>
                                </div>
                                <button className="btn btn-success mb-2" onClick={(event) => saveStudent(event)}>Save</button>
                                <button className="btn btn-danger mb-2" onClick={() => navigate("/students")}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default StudentComponent;