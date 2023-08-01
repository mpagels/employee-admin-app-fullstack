import './SearchEmployee.css'

type SearchEmployeeProps = {
  searchInput: string
  onChange: (x: string) => void
  onClick: () => void
}

function SearchEmployee({
  onChange,
  onClick,
  searchInput,
}: SearchEmployeeProps) {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value)
  }
  return (
    <div className={'wrapper'}>
      <input
        className="search-input"
        type={'text'}
        onChange={handleOnChange}
        value={searchInput}
        placeholder={'Search employee'}
      />
      <button onClick={onClick}>X</button>
    </div>
  )
}

export default SearchEmployee
