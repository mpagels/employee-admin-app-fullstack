import './FormTextInput.css'

type FormTextInputProps = {
  handleOnChange: (x: string) => void
  searchInput: string
  id: string
}

export function FormTextInput({
  handleOnChange,
  searchInput,
}: FormTextInputProps) {
  return (
    <input
      className="search-input"
      type={'text'}
      onChange={handleOnChange}
      value={searchInput}
    />
  )
}
