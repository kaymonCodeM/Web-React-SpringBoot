import React from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL:'http://localhost:8080/students'
})

class Api extends React.Component {


    constructor(props) {
        super(props)
        //Get is the url and then is the response
        this.state = {
            students: []
        }
    }
    componentDidMount(){
        this.getStudents();
    }
    
    deleteStudent = async (id) => {
        await api.delete(`/${id}`);
        this.getStudents();
    }

    getStudents = async () => {
        let data = await api.get('/').then(({data}) => data);
        console.log(data);
        this.setState({students:data});
    }

    createStudent = async (n,a,e) => {
        let res = await api.post('/',{name:n,age:a,email:e});
        console.log(res);
        this.getStudents();
    }

    updateStudent = async (i,n,a,e) => {
        await api.put("",{id:i,name:n,age:a,email:e});
        this.getStudents();
    }

    render() {
        return (<div>
            {this.state.students.map(student => <h2 key={student.id}
            >{student.name} {student.age} {student.email}
            <button onClick = {() =>this.deleteStudent(student.id)}>x</button>
            </h2>)}
        </div>)
    };

}
export default new Api()