import React from 'react';
import Create from '../Service/Create';
import Update from '../Service/Update';

const initialState = {
    url: '',
    id: '',
    name: "",
    age: 0,
    email: "",
    displayNameError: "hidden",
    displayAgeError: "hidden",
    displayIDError: "hidden",
    displayEmailError: "hidden",
    nameErrorMessage: "",
    ageErrorMessage: "",
    idErrorMessage: "",
    emailErrorMessage: ""
}

class Form extends React.Component {

    state = initialState;


    setID = i => {
        this.setState({
            id: i.target.value
        });
    }

    setName = n => {
        this.setState({
            name: n.target.value

        });
    }

    setAge = a => {
        this.setState({
            age: a.target.value
        })
    }

    setEmail = e => {
        this.setState({
            email: e.target.value
        });
    }
    updateStudent = () => {
        this.setState({ displayIDError: "hidden" });
        let isValid = this.validate();
        if (isValid) {
            if (this.state.id !== '') {
                Update.updateStudent(this.state.id, this.state.name, this.state.age, this.state.email);
                window.location.href = "http://localhost:3000/";
            } else {
                this.setState({ idErrorMessage: "Did not input ID" });
                this.setState({ displayIDError: "visible" });
            }
        }
    }


    validate = () => {
        this.setState({
            displayNameError: "hidden",
            displayAgeError: "hidden",
            displayEmailError: "hidden"
        });

        let valid = true;

        if (this.state.name === '') {
            this.setState({ nameErrorMessage: "Must input name" });
            this.setState({ displayNameError: "visible" });
            valid = false;
        }

        if (this.state.age === 0) {
            this.setState({ ageErrorMessage: "Must input age" });
            this.setState({ displayAgeError: "visible" });
            valid = false;
        }

        if (this.state.email === '') {
            this.setState({ emailErrorMessage: "Must input email" });
            this.setState({ displayEmailError: "visible" });
            valid = false;
        }

        return valid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let isValid = this.validate();

        if (isValid === true) {
            Create(this.state.name, this.state.age, this.state.email);
            window.location.href = "http://localhost:3000/";
        }
    }

    render() {

        return (
            <div className="container col-md-6" style={{ "marginTop": "120px" }}>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder='Full Name' onChange={e => this.setName(e)} />
                            <div role="alert" className='alert alert-danger alertMessage' style={{ visibility: this.state.displayNameError }}>{this.state.nameErrorMessage}</div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input type="number" min="1" className="form-control" id="age" placeholder='yr' onChange={e => this.setAge(e)} />
                            <div role="alert" className='alert alert-danger alertMessage' style={{ visibility: this.state.displayAgeError }}>{this.state.ageErrorMessage}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mb-4">
                            <label htmlFor="emailInfo" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="emailInfo" placeholder='email@email.com' onChange={e => this.setEmail(e)} />
                            <div role="alert" className='alert alert-danger alertMessage' style={{ visibility: this.state.displayEmailError }}>{this.state.emailErrorMessage}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-primary" style={{ "width": "100%" }}>Submit</button>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-primary" id="update" style={{ "width": "100%" }} onClick={() => this.updateStudent()}>Update</button>
                        </div>
                        <div className="col-md-4">
                            <input type="number" min="0" className="form-control" id="id" placeholder='ID' onChange={e => this.setID(e)} />
                            <div role="alert" className='alert alert-danger alertMessage' style={{ visibility: this.state.displayIDError, flex:"1 100%" }}>{this.state.idErrorMessage}</div>
                        </div>
                    </div>
                </form>

            </div>

        )
    }
}


export default Form