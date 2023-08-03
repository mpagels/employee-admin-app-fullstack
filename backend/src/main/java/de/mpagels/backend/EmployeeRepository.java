package de.mpagels.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Data
@Repository
@AllArgsConstructor
public class EmployeeRepository {

    private final HashMap<String, Employee> employees = new HashMap<>();

    public List<Employee> getAllEmployees() {
        return new ArrayList<>(employees.values());
    }

    public Employee addEmployee(Employee newEmployee) {
        employees.put(newEmployee.getEmail(), newEmployee);
        return newEmployee;
    }

    public boolean isEmployeePresent(String email) {
        return employees.containsKey(email);
    }

    public Employee removeEmployee(String email) {
        return employees.remove(email);
    }

    public Employee getEmployee(String email) {
        return employees.get(email);
    }

}
