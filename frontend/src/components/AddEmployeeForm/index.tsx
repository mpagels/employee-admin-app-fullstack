import './AddEmployeeForm.css'
import { FormTextInput } from '../FormTextInput'
import { Link } from 'react-router-dom'

export function AddEmployeeForm() {
  return (
    <form className={'add-employee-form'}>
      <div className={'input-item'}>
        <label htmlFor={'firstname'}>First name:</label>
        <FormTextInput id={'firstname'} />
      </div>
      <div className={'input-item'}>
        <label htmlFor={'lastname'}>Last name:</label>
        <FormTextInput id={'lastname'} />
      </div>
      <div className={'input-item'}>
        <label htmlFor={'email'}>Email:</label>
        <FormTextInput id={'email'} />
      </div>
      <div className={'input-item'}>
        <label htmlFor={'role'}>Role:</label>
        <select id={'role'}>
          <option>CEO</option>
          <option>Lead</option>
          <option>Coach</option>
        </select>
      </div>
      <button className={'form-save-btn button-size'}>Save Employee</button>
      <Link to={'/'}>
        <button className={'form-cancel-btn button-size'} type={'button'}>
          Cancel and back
        </button>
      </Link>
    </form>
  )
}
