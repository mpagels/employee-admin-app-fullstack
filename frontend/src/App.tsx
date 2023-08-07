import './App.css'

import { Route, Routes, useNavigate } from 'react-router-dom'
import Headline from './components/Headline'
import { Homepage } from './pages/Homepage'
import { AddPage } from './pages/AddPage'
import { useEffect, useState } from 'react'
import axios ,{AxiosResponse, AxiosError} from 'axios'
import EmployeePage from './pages/EmployeePage'

export type Employee = {
  id: string
  firstName: string
  lastName: string
  role: ''| 'CEO' | 'Coach' | 'Lead'
  email: string
}

function App() {
  const [employees, setEmployees] = useState<Employee[]>([])
    const [isInEditMode, setIsInEditMode] = useState<boolean>(false)
    const navigate = useNavigate()

  useEffect(() => {
    axios.get('/api/employees').then((data:AxiosResponse) => setEmployees(data.data))
  }, [])
  function addEmployee(newEmploye: Employee) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    axios.post('/api/employees', newEmploye).then(() => {
        axios.get('/api/employees').then((data) => setEmployees(data.data))
        navigate('/')

    }).catch((error:AxiosError) => {
        if (error.response?.status === 304) {
            alert('Email already used. Employee not added. Try another email address.')
        }
    })
  }

  function editEmployee(id:string, updatedEmployee:Employee) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      axios.put(`/api/employees/${id}`, updatedEmployee).then(() => {
          axios.get('/api/employees').then((data) => setEmployees(data.data))
          navigate('/')
          toggleIsEditMode()
      }).catch((error:AxiosError) => {
          if (error.response?.status === 304) {
              alert('Email already used. Employee not modified. Try another email address.')
          }
      })
  }
  function deleteEmployee(id: string) {
    const result = confirm('Do you really want to \n' + 'delete this Emplyee?')
    if (result) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      axios.delete('/api/employees/' + id).then((_) => {
        axios.get('/api/employees').then((data) => setEmployees(data.data))
      })
    }
  }

  function deleteEmployeeAndPushToRoot(id: string) {
    const result = confirm('Do you really want to \n' + 'delete this Emplyee?')
    if (result) {
      setEmployees(employees.filter((employee) => employee.id !== id))
      navigate('/')
    }
  }

  function toggleIsEditMode() {
      setIsInEditMode(!isInEditMode)
  }

  function setIsInEditModeToFalse(){
      setIsInEditMode(false)
  }
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <Homepage employees={employees} deleteEmployee={deleteEmployee} toggleIsEditMode={toggleIsEditMode}>
            <Headline label={'Employee list'} />
          </Homepage>
        }
      />{' '}
      <Route
        path={'/add'}
        element={
          <AddPage addEmployee={addEmployee} editEmployee={editEmployee}  isInEditMode={isInEditMode} toggleEditMode={toggleIsEditMode}>
            <Headline label={'Add employee'} />
          </AddPage>
        }
      />
      <Route
        path={'/employee/:id'}
        element={
          <EmployeePage addEmployee={addEmployee} deleteEmployee={deleteEmployeeAndPushToRoot} toggleIsEditMode={toggleIsEditMode} isInEditMode={isInEditMode} editEmployee={editEmployee} setIsInEditModeToFalse={setIsInEditModeToFalse}>
            <Headline label={isInEditMode ? 'Edit employee' : 'View employee'} />
          </EmployeePage>
        }
      />
    </Routes>
  )
}

export default App
