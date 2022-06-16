import React from "react"
import "../index.css"
import { useSelector, useDispatch } from "react-redux"
import { deletedEmployee } from "../features/employeeSlice"
import {useNavigate} from "react-router-dom"

const EmployeeLists = () => {
  const employees = useSelector(state => state.employeeInfo.employees)
  const navigate = useNavigate()
  const dispatch = useDispatch()

 

  return (
    <div className="container">
      <h2>Eployees List</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">First</div>
          <div className="col col-2">Last</div>
          <div className="col col-3">Email</div>
          <div className="col col-4">Actions</div>
        </li>
        {
          employees.slice().reverse().map((employee) => (
            <li className="table-row" key={employee.id}>
              <div className="col col-1" data-label="First Name">{employee.firstName}</div>
              <div className="col col-2" data-label="Last Name">{employee.lastName}</div>
              <div className="col col-3" data-label="Email">{employee.email}</div>
              <div className="col col-4" data-label="Actions">
                <button className="table-row__update-btn"
                  type="button"
                  onClick={() => navigate(`/updateEmployee/${employee.id}`)}>Updated</button>
                <button className="table-row__delete-btn"
                  onClick={() => dispatch(deletedEmployee(employee.id))}>Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default EmployeeLists