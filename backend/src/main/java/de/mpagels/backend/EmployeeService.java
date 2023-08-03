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

    public Employee addEmployee(Employee employee) throws Exception {
        boolean containsEmployee = employeeRepository.isEmployeePresent(employee.getEmail());
        if (containsEmployee) {
            throw new RuntimeException("Email is already used");
        }
        Employee addedEmployee = employeeRepository.addEmployee(employee);
        return addedEmployee;
    }
}
