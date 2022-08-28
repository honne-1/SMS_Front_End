import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/students';

class StudentService {
    static getAllStudents() {
        return axios.get(baseUrl);
    }
    static addStudent(student) {
        return axios.post(baseUrl, student);
    }

    static getStudentById(zid) {
        return axios.get(`${baseUrl}/${zid}`);
    }

    static updateStudent(zid, student) {
        return axios.put(`${baseUrl}/${zid}`, student);
    }

    static deleteStudent(zid) {
        return axios.delete(`${baseUrl}/${zid}`);
    }
}

export default StudentService;