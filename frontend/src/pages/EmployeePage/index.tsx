import {Link, useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Employee } from '../../App.tsx'
import './EmployeePage.css'
import axios from 'axios'
import {AddEmployeeForm} from "../../components/AddEmployeeForm";

type EmployeePageProps = {
  children: React.ReactElement
  deleteEmployee: (x: string) => void
  editEmployee: (id:string, newEmployee:Employee) => void
  isInEditMode: boolean
  toggleIsEditMode: () => void
  addEmployee: (employee: Employee) => void
  setIsInEditModeToFalse:() => void
}

function EmployeePage({ children, deleteEmployee, editEmployee, isInEditMode, toggleIsEditMode, addEmployee, setIsInEditModeToFalse }: EmployeePageProps) {
  const [employee, setEmployee] = useState<Employee>()


  const { id } = useParams()


  useEffect(() => {
    axios.get('/api/employees/' + id).then((data) => setEmployee(data.data))
  }, [id])

  return (
    <div>
      {children}
      {employee === undefined ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {isInEditMode ? <AddEmployeeForm addEmployee={addEmployee} employeeData={employee} isInEditMode={isInEditMode} toggleEditMode={toggleIsEditMode} editEmployee={editEmployee}/> :
          <div className={'employee-display-wrapper'}>
            <div>
              <h2>First name:</h2>
              <p>{employee.firstName}</p>
            </div>{' '}
            <div>
              <h2>Last name:</h2>
              <p>{employee.lastName}</p>
            </div>
            <div>
              <h2>Email:</h2>
              <p>{employee.email}</p>
            </div>
            <div>
              <h2>Role:</h2>
              <p>{employee.role}</p>
            </div>
          </div>}

          <div className={"action-button-wrapper"}>
            <Link to={"/"}>
              <button onClick={setIsInEditModeToFalse}>
                Back to employee list
              </button>
            </Link>
          <button
              className={'delete-btn'}
              onClick={toggleIsEditMode}
          >
            {!isInEditMode ? "Edit" : "Cancel Edit"}
          </button>
          <button
            className={'delete-btn'}
            onClick={() => deleteEmployee(employee.id)}
          >
            Delete
          </button>
          </div>
        </>
      )}
    </div>
  )
}

export default EmployeePage
