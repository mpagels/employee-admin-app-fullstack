package de.mpagels.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Data
@Service
@AllArgsConstructor
public class EmployeeService {

    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee addEmployee(Employee employee) throws EmployeeAlreadyExistException {
        boolean containsEmployee = employeeRepository.existsEmployeeById(employee.getId());
        if (containsEmployee) {
            throw new EmployeeAlreadyExistException("Email is already used");
        }
        Employee addedEmployee = employeeRepository.save(employee);
        return addedEmployee;
    }

    public void removeEmployee(String id) throws EmployeeDoesNotExistException {
        boolean containsNotEmployee = !employeeRepository.existsEmployeeById(id);

        if (containsNotEmployee) {
            throw new EmployeeDoesNotExistException("Employee does not exists");
        }

        employeeRepository.deleteById(id);

    }

    public Employee updateEmployee(String id, Employee employee) throws EmployeeDoesNotExistException, EmployeeAlreadyExistException {
        boolean containsNotEmployee = !employeeRepository.existsEmployeeById(id);
        if (containsNotEmployee) {
            throw new EmployeeDoesNotExistException("Employee does not exists");
        }
        Employee updatedEmployee = employeeRepository.save(employee);
        return updatedEmployee;
    }

    public Set<String> getAllEmployeesIDs() {
        return employeeRepository.findAll().stream().map(e -> e.getId()).collect(Collectors.toSet());

    }

    public Employee getEmployeeById(String id) throws EmployeeDoesNotExistException {
        boolean containsNotEmployee = !employeeRepository.existsEmployeeById(id);
        if (containsNotEmployee) {
            throw new EmployeeDoesNotExistException("Employee does not exists");
        }
        return employeeRepository.findById(id).orElse(null);
    }
}
