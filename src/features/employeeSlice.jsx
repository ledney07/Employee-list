import { createSlice } from "@reduxjs/toolkit"


const getInitialEmployee = () => {
  const localEmployeeLists = window.localStorage.getItem("employees")
  if (localEmployeeLists) return JSON.parse(localEmployeeLists)
  window.localStorage.setItem("employees", JSON.stringify([]))
  return []
}

const initialValue = {
  employees: getInitialEmployee()
}

const employeeSlice = createSlice({
  name: "employee",
  initialState: initialValue,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload)
      const employees = window.localStorage.getItem("employees")
      if (employees) {
        const employeeArray = JSON.parse(employees)
        employeeArray.push({
          ...action.payload
        })
        window.localStorage.setItem("employees", JSON.stringify(employeeArray))
      } else {
        window.localStorage("employees", JSON.stringify([{ ...action.payload }]))
      }
    },

    deletedEmployee: (state, action) => {
      const employees = window.localStorage.getItem("employees")
      if (employees) {
        const employeeArray = JSON.parse(employees)
        employeeArray.forEach((item, index) => {
          if (item.id === action.payload) {
            employeeArray.splice(index, 1)
          }
        })
        window.localStorage.setItem("employees", JSON.stringify(employeeArray))
        state.employees = employeeArray
      }
    },

    updatedEmployee: (state, action) => {
      const employees = window.localStorage.getItem("employees")
      if (employees) {
        const employeeArray = JSON.parse(employees)
        employeeArray.find((item) => {
          if (item.id === action.payload.id) {
            item.firstName = action.payload.firstName
            item.lastName = action.payload.lastName
            item.email = action.payload.email
          }
        })
        window.localStorage.setItem("employees", JSON.stringify(employeeArray))
        state.employees = employeeArray
      }
    }

  }
})

export const { addEmployee, updatedEmployee, deletedEmployee } = employeeSlice.actions
export default employeeSlice.reducer