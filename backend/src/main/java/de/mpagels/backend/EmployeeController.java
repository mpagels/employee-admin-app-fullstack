package de.mpagels.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) throws Exception {

        Employee addedEmployee = employeeService.addEmployee(employee);
        return addedEmployee;
    }

    @DeleteMapping("/{email}")
    public Employee removeEmployee(@PathVariable String email) throws EmployeeDoesNotExistException {
        System.out.println(email);
        Employee removedEmployee = employeeService.removeEmployee(email);
        return removedEmployee;
    }
}
