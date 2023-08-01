import { Employee } from '../../App.tsx'
import './TableView.css'

type TableViewProp = {
  employees: Employee[]
}

export default function TableView({ employees }: TableViewProp) {
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
              <td>Buttons</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
