import React, { useState } from 'react'
import Api from './Api'

const initialState = {
        id: -1,
        name:"",
        age:0,
        email:"",
        nameError: "",
        ageError:"",
        emailError: ""
}

class Form extends React.Component{

    state = initialState;

    setID = i =>{
        this.setState({
            id:i.target.value
        });
    }

    setName = n =>{
        this.setState({
           name:n.target.value

        });
    }

    setAge = a =>{
        this.setState({
            age:a.target.value
        })
    }

    setEmail = e =>{
        this.setState({
            email:e.target.value
        });
    }
    

    validate = () =>{
        let nameError= "";
        let ageError="";
        let emailError= "";

        if(!this.state.email.includes('@')){
            emailError='invalid email';
        }
        if(emailError){
            this.setState({emailError});
            return false;
        }
        return true;
    }

    handleSubmit = event =>{
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            Api.createStudent(this.state.name,this.state.age,this.state.email);
        }

        this.setState(initialState);
    }

    render(){

        return (
            <div class="container col-md-6" style={{"marginTop":"120px"}} onSubmit={e=>this.handleSubmit(e)}>

            <form action="" class="d-flex flex-column">
                    <div class="row">
                        <div class="col-md-8 mb-3">
                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="name" required  onChange={e=>this.setName(e)}/>
                            <div style={{fontSize:12, color:"red"}}>{this.state.nameError}</div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="age" class="form-label">Age</label>
                            <input type="number" min="1" class="form-control" id="age" required onChange={e=>this.setAge(e)}/>
                            <div style={{fontSize:12, color:"red"}}>{this.state.ageError}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 mb-4">
                            <label for="emailInfo" class="form-label">E-mail</label>
                            <input type="email" class="form-control" id="emailInfo" required onChange={e=>this.setEmail(e)}/>
                            <div style={{fontSize:12, color:"red"}}>{this.state.emailError}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <button type="submit" class="btn btn-primary" style={{ "width": "100%" }}>Submit</button>
                        </div>
                        <div class="col-md-4">
                            <button type="button" class="btn btn-primary" id="update" style={{ "width": "100%" }}>Update</button>
                        </div>
                        <div class="col-md-4">
                        <label for="id" class="id-label">ID</label>
                        <input type="number" min="0" class="form-control" id="id" onChange={e=>this.setID(e)}/>
                        </div>
                    </div>
            </form>

        </div>

        )
    }
}


export default Form