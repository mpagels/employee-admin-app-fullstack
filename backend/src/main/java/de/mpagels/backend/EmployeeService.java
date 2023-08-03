package de.mpagels.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;
@Data
@Service
@AllArgsConstructor
public class EmployeeService {

    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.getAllEmployees();
    }

    public Employee addEmployee(Employee employee) throws EmployeeAlreadyExistException {
        boolean containsEmployee = employeeRepository.isEmployeePresent(employee.getEmail());
        if (containsEmployee) {
            throw new EmployeeAlreadyExistException("Email is already used");
        }
        Employee addedEmployee = employeeRepository.addEmployee(employee);
        return addedEmployee;
    }

    public Employee removeEmployee(String email) throws EmployeeDoesNotExistException {
        boolean containsNotEmployee = !employeeRepository.isEmployeePresent(email);

        if (containsNotEmployee) {
            throw new EmployeeDoesNotExistException("Employee does not exists");
        }

        Employee removedEmployee = employeeRepository.removeEmployee(email);
        return removedEmployee;
    }
}
