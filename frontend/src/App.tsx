import './App.css'

import { Route, Routes } from 'react-router-dom'
import Headline from './components/Headline'
import { Homepage } from './pages/Homepage'
import { AddPage } from './pages/AddPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

export type Employee = {
  id: string
  firstName: string
  lastName: string
  role: 'CEO' | 'Coach' | 'Lead'
  email: string
}

function App() {
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    axios.get('/api/employees').then((data) => setEmployees(data.data))
  }, [])
  function addEmployee(newEmploye: Employee) {
    setEmployees([newEmploye, ...employees])
  }

  function deleteEmployee(id: string) {
    const result = confirm('Do you really want to \n' + 'delete this Emplyee?')
    if (result) {
      setEmployees(employees.filter((employee) => employee.id !== id))
    }
  }

  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <Homepage employees={employees} deleteEmployee={deleteEmployee}>
            <Headline label={'Employee list'} />
          </Homepage>
        }
      />{' '}
      <Route
        path={'/add'}
        element={
          <AddPage addEmployee={addEmployee}>
            <Headline label={'Add employee'} />
          </AddPage>
        }
      />
    </Routes>
  )
}

export default App
