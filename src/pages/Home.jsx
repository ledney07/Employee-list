import React from 'react';
import '../App.css';
import EmployeeLists from "../components/EmployeeLists"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <main>
      <div style={{marginBottom: "40px"}}>
        <h1>Add Employee</h1>
         <button style={{backgroundColor: "#59d4ff", color: "white"}} 
           onClick={() => navigate("/addEmployee")}>Add Employee</button>
      </div>
      <EmployeeLists />
    </main>
  );
}

export default Home;