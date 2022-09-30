
import React from 'react'
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/students'
})

class Table extends React.Component {

    state = {
        students: []    
    }

    constructor(props) {
        super(props)
        //Get is the url and then is the response
        this.state = {
            students: []
        }
    }
    componentDidMount() {
        let data = api.get('/').then(({data}) => data);
        console.log(data);
        this.setState({students:data});
    }

    render() {
        return (
            <div class="Container mt-5">
                <h2 className="text-center"> List of Students</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td> Student Id</td>
                            <td> Student Name</td>
                            <td> Student Age</td>
                            <td> Student Email</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.students.map(student => <h2 key={student.id}>{student.name} {student.age} {student.email}
                    </h2>)}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Table