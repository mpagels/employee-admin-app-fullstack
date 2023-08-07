import { Employee } from '../../App.tsx'
import './TableView.css'
import { Link } from 'react-router-dom'

type TableViewProp = {
  employees: Employee[]
  deleteEmployee: (id: string) => void
    toggleIsEditMode:() => void
}

export default function TableView({
  employees,
  deleteEmployee,
                                      toggleIsEditMode
}: TableViewProp) {
  return (
    <table className="darkTable">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Role</th>
          <th>Email address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.role}</td>
              <td>{employee.email}</td>
              <td>

                <Link to={`/employee/${employee.id}`}>
                  <button className={'view-btn'}>View</button>
                </Link>
                  <Link to={`/employee/${employee.id}`}>
                      <button onClick={toggleIsEditMode} className={'edit-btn'}>Edit</button>
                  </Link>
                <button
                  className={'delete-btn'}
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
