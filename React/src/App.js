//npm install bootstrap
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Form from './Components/Form';
import Table from './Components/Table';
import { useState } from 'react';
import React from "react";
import axios from 'axios';
import Api from './Service/Api'

function App() {

  const baseURL ='http://localhost:8080/students'
  const [students,setStudents] = useState([]);

  useState(() => {
    axios.get(baseURL).then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <div>
    <Form />
    <Table students={students}/>
    </div>
  );
}

export default App;
