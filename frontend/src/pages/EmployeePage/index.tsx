import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Employee } from '../../App.tsx'
import './EmployeePage.css'
import axios from 'axios'

type EmployeePageProps = {
  children: React.ReactElement
  deleteEmployee: (x: string) => void
}

function EmployeePage({ children, deleteEmployee }: EmployeePageProps) {
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
          </div>
          <button
            className={'delete-btn'}
            onClick={() => deleteEmployee(employee.id)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  )
}

export default EmployeePage
