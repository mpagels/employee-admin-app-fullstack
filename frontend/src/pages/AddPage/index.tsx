import React from 'react'
import { AddEmployeeForm } from '../../components/AddEmployeeForm'

type Props = {
  children: React.ReactElement
}

export function AddPage({ children }: Props) {
  return (
    <div>
      {children}
      <AddEmployeeForm />
    </div>
  )
}
