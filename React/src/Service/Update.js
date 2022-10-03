
import axios from "axios";


const baseURL = 'http://localhost:8080/students'

class Update {
    updateStudent = (i, n, a, e) => {
        axios.put(baseURL, { id: i, name: n, age: a, email: e }).catch(err=>err);

    }
}

export default new Update();
