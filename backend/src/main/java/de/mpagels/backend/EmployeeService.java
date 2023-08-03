package de.mpagels.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Data
@Service
@AllArgsConstructor
public class EmployeeService {

    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.getAllEmployees();
    }

    public Employee addEmployee(Employee employee) throws EmployeeAlreadyExistException {
        boolean containsEmployee = employeeRepository.isEmployeePresent(employee.getId());
        if (containsEmployee) {
            throw new EmployeeAlreadyExistException("Email is already used");
        }
        Employee addedEmployee = employeeRepository.addEmployee(employee);
        return addedEmployee;
    }

    public Employee removeEmployee(String id) throws EmployeeDoesNotExistException {
        boolean containsNotEmployee = !employeeRepository.isEmployeePresent(id);

        if (containsNotEmployee) {
            throw new EmployeeDoesNotExistException("Employee does not exists");
        }

        Employee removedEmployee = employeeRepository.removeEmployee(id);
        return removedEmployee;
    }

    public Employee updateEmployee(String id, Employee employee) throws EmployeeDoesNotExistException {
        boolean containsNotEmployee = !employeeRepository.isEmployeePresent(id);
        if (containsNotEmployee) {
            throw new EmployeeDoesNotExistException("Employee does not exists");
        }

        Employee updatedEmployee = employeeRepository.updateEmployee(id, employee);
        return updatedEmployee;
    }

    public Set<String> getAllEmployeesIDs() {
        return employeeRepository.getAllEmployeesIDs();
    }
}
