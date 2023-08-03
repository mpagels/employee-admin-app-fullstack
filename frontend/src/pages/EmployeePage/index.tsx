import { useParams } from 'react-router-dom'
import React from 'react'
import { Employee } from '../../App.tsx'
import './EmployeePage.css'

type EmployeePageProps = {
  children: React.ReactElement
  employees: Employee[]
  deleteEmployee: (x: string) => void
}

function EmployeePage({
  children,
  employees,
  deleteEmployee,
}: EmployeePageProps) {
  const { id } = useParams()
  const foundEmployee: Employee | undefined = employees.find(
    (employee) => employee.id === id
  )

  return (
    <div>
      {children}
      {foundEmployee === undefined ? (
        <h2>Nothing found</h2>
      ) : (
        <>
          <div className={'employee-display-wrapper'}>
            <div>
              <h2>First name:</h2>
              <p>{foundEmployee.firstName}</p>
            </div>{' '}
            <div>
              <h2>Last name:</h2>
              <p>{foundEmployee.lastName}</p>
            </div>
            <div>
              <h2>Email:</h2>
              <p>{foundEmployee.email}</p>
            </div>
            <div>
              <h2>Role:</h2>
              <p>{foundEmployee.role}</p>
            </div>
          </div>
          <button
            className={'delete-btn'}
            onClick={() => deleteEmployee(foundEmployee.id)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  )
}

export default EmployeePage
