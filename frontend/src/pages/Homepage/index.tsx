import SearchEmployee from '../../components/SearchEmployee'
import TableView from '../../components/Tableview'
import React, { useState } from 'react'
import { Employee } from '../../App.tsx'

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
      <SearchEmployee
        onClick={resetSearchInput}
        onChange={handleOnChange}
        searchInput={searchInput}
      />
      <TableView employees={filteredEmployees} />
    </div>
  )
}
