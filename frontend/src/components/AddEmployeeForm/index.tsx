import './AddEmployeeForm.css'
import { FormTextInput } from '../FormTextInput'
import { Link } from 'react-router-dom'
import { Employee } from '../../App.tsx'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'

type AddEmployeeFormProps = {
  addEmployee: (employee: Employee) => void
  employeeData: Employee
  isInEditMode: boolean
  toggleEditMode : () => void
  editEmployee: (id:string, updatedEmployee:Employee) => void
}

const emptyEmployeeData : Employee = {id:"", email:"", role:"", lastName:"", firstName:""}

export function AddEmployeeForm({ addEmployee, employeeData = emptyEmployeeData, isInEditMode, editEmployee , toggleEditMode}: AddEmployeeFormProps) {
  const [firstName, setFirstName] = useState('' || employeeData.firstName)
  const [lastName, setLastName] = useState('' || employeeData.lastName)
  const [email, setEmail] = useState('' || employeeData.email)
  const [role, setRole] = useState<""| 'CEO' | 'Lead' | 'Coach'>('' || employeeData.role)

  function handleOnChangeFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value)
  }
  function handleOnChangeLasttName(event: React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value)
  }
  function handleOnChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handleOnChangeRole(event: React.ChangeEvent<HTMLSelectElement>) {
    setRole(event.target.value as 'CEO' | 'Lead' | 'Coach')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isInEditMode) {
      editEmployee(employeeData.id,{
        id: employeeData.id,
        firstName,
        lastName,
        email,
        role,
      } )
    } else {

    addEmployee({
      firstName,
      lastName,
      email,
      role,
      id: nanoid(),
    })
    }
  }
  return (
    <form className={'add-employee-form'} onSubmit={handleSubmit}>
      <div className={'input-item'}>
        <label htmlFor={'firstname'}>First name:</label>
        <FormTextInput
          id={'firstname'}
          handleOnChange={handleOnChangeFirstName}
          searchInput={firstName}
        />
      </div>
      <div className={'input-item'}>
        <label htmlFor={'lastname'}>Last name:</label>
        <FormTextInput
          id={'lastname'}
          handleOnChange={handleOnChangeLasttName}
          searchInput={lastName}
        />
      </div>
      <div className={'input-item'}>
        <label htmlFor={'email'}>Email:</label>
        <FormTextInput
          id={'email'}
          handleOnChange={handleOnChangeEmail}
          searchInput={email}
          isEmail={true}
        />
      </div>
      <div className={'input-item'}>
        <label htmlFor={'role'}>Role:</label>
        <select id={'role'} onChange={handleOnChangeRole} value={role}>
          <option value={'CEO'}>CEO</option>
          <option value={'Lead'}>Lead</option>
          <option value={'Coach'}>Coach</option>
        </select>
      </div>
      <button className={'form-save-btn button-size'}>{isInEditMode ? "Edit employee" : "Save employee"}</button>
      <Link to={'/'}>
        <button onClick={toggleEditMode} className={'form-cancel-btn button-size'} type={'button'}>
          Cancel and back
        </button>
      </Link>
    </form>
  )
}
