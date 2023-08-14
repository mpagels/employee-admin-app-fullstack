package de.mpagels.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable String id) throws EmployeeDoesNotExistException {
        return employeeService.getEmployeeById(id);
    }
    @GetMapping("/ids")
    public Set<String> getAllEmployeesIDs() {
        return employeeService.getAllEmployeesIDs();
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) throws Exception {

        Employee addedEmployee = employeeService.addEmployee(employee);
        return addedEmployee;
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable String id, @RequestBody Employee employee) throws EmployeeDoesNotExistException, EmployeeAlreadyExistException {
        Employee updatedEmployee = employeeService.updateEmployee(id, employee);
        return updatedEmployee;

    }

    @DeleteMapping("/{id}")
    public void removeEmployee(@PathVariable String id) throws EmployeeDoesNotExistException {
        System.out.println(id);
        employeeService.removeEmployee(id);
    }
}
