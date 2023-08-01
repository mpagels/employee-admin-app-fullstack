import './FormTextInput.css'
import React from 'react'

type FormTextInputProps = {
  handleOnChange: (event: React.ChangeEvent) => void
  searchInput: string
  id: string
  isEmail?: boolean
}

export function FormTextInput({
  handleOnChange,
  searchInput,
  isEmail,
}: FormTextInputProps) {
  return (
    <input
      className="search-input"
      type={isEmail ? 'email' : 'text'}
      onChange={handleOnChange}
      value={searchInput}
      required
    />
  )
}
