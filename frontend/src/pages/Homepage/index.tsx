import { Link } from 'react-router-dom'
import SearchEmployee from '../../components/SearchEmployee'
import TableView from '../../components/Tableview'
import React, { useState } from 'react'
import { Employee } from '../../App.tsx'
import './Homepage.css'

type HomepageProps = {
  employees: Employee[]
  children: React.ReactElement
}

export function Homepage({ employees, children }: HomepageProps) {
  const [searchInput, setSearchInput] = useState<string>('')

  function handleOnChange(newInput: string) {
    setSearchInput(newInput)
  }

  function resetSearchInput() {
    setSearchInput('')
  }
  const filteredEmployees: Employee[] = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
      searchInput === ''
  )
  return (
    <div>
      {children}
      <div className={'action-btn-wrapper'}>
        <Link to={'/add'}>
          <button className={'add-btn'}>Add new employee</button>
        </Link>
        <SearchEmployee
          onClick={resetSearchInput}
          onChange={handleOnChange}
          searchInput={searchInput}
        />
      </div>
      <TableView employees={filteredEmployees} />
    </div>
  )
}
