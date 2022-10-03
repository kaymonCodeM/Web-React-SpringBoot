import axios from 'axios';

const baseURL ='http://localhost:8080/students'

export default function Delete(id) {
    axios.delete(`${baseURL}/${id}`);
}
