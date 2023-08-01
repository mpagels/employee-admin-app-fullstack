import React from 'react'
import { AddEmployeeForm } from '../../components/AddEmployeeForm'
import { Employee } from '../../App.tsx'

type Props = {
  children: React.ReactElement
  addEmployee: (employee: Employee) => void
}

export function AddPage({ children, addEmployee }: Props) {
  return (
    <div>
      {children}
      <AddEmployeeForm addEmployee={addEmployee} />
    </div>
  )
}
