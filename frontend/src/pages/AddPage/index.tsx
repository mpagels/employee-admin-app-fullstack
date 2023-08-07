import React from 'react'
import { AddEmployeeForm } from '../../components/AddEmployeeForm'
import { Employee } from '../../App.tsx'

type Props = {
  children: React.ReactElement
  addEmployee: (employee: Employee) => void
  editEmployee: (id:string, updatedEmployee:Employee) => void
  toggleEditMode : () => void
  isInEditMode: boolean
}

export function AddPage({ children, addEmployee ,editEmployee, toggleEditMode, isInEditMode}: Props) {
  return (
    <div>
      {children}
      <AddEmployeeForm addEmployee={addEmployee} editEmployee={editEmployee} isInEditMode={isInEditMode} toggleEditMode={toggleEditMode}/>
    </div>
  )
}
