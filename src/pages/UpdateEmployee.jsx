import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { updatedEmployee } from "../features/employeeSlice"



const UpdateEmployee = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employeeInfo.employees)
  const navigate = useNavigate();
  const exitsEmployeeInfo = employees.filter(employee => employee.id === params.id)
  const { firstName, lastName, email } = exitsEmployeeInfo[0]
  const [values, setValues] = useState({
    firstName, lastName, email
  });




  const handleUpdated = (e) => {
    e.preventDefault()
    setValues({ firstName: '', lastName: '', email: '' });
    dispatch(updatedEmployee({
      id: params.id,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email
    }));
    navigate("/")
  }

  return (
    <div className="container">
      <form className="wrapper" onSubmit={handleUpdated}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={values.firstName }
          onChange={(e) => setValues({ ...values, firstName: e.target.value })}
          required />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={values.lastName }
          onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          required />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email }
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          required />
        <button className="form__btn" >Save</button>
      </form>
    </div>
  )
}

export default UpdateEmployee


