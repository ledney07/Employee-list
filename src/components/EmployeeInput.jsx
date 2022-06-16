import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addEmployee } from "../features/employeeSlice"
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom";

const EmployeeInput = () => {
  const [values, setValues] = useState({
    firstName: '', 
    lastName: '',
    email: ''
  });
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInput = ({ target }) => {
    const { name, value } = target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddUser = () => {
    setValues({ firstName: '', lastName: '', email: '' });
    dispatch(addEmployee({
      id: uuid(),
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email
    }));
    navigate('/');
  }

  return (
    <div className="container">
      <form className="wrapper" onSubmit={handleAddUser}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={values.firstName}
          onChange={handleInput}
          required />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleInput}
          required />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInput}
          required />
        <button className="form__btn">Add Employee</button>
      </form>
    </div>
  )
}

export default EmployeeInput