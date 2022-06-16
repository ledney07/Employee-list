import React from "react"
import EmployeeInput from "../components/EmployeeInput"
import { useNavigate } from "react-router-dom";

function AddUser() {
  let navigate = useNavigate()
  return (
    <>
     <div style={{margin:"20px"}}>
      <button style={{color:"#000"}} onClick={() => navigate("/")}>Go Back</button>
       <h2>Employee:</h2></div>
      <EmployeeInput />
    </>
  )
}

export default AddUser