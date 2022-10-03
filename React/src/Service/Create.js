import axios from 'axios'

const baseURL ='http://localhost:8080/students'

export default function Create(studentName,studentAge,studentEmail) {
    axios.post(baseURL,{name:studentName,age:studentAge,email:studentEmail});
}
