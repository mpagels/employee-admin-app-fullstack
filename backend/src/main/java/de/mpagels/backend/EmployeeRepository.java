package de.mpagels.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Repository;

import java.util.*;

@Data
@Repository
@AllArgsConstructor
public class EmployeeRepository {

    private final HashMap<String, Employee> employees = new HashMap<>();

    public List<Employee> getAllEmployees() {
        return new ArrayList<>(employees.values());
    }

    public Employee addEmployee(Employee newEmployee) throws EmployeeAlreadyExistException {
        if (isEmailUnique(newEmployee, employees)) {
            employees.put(newEmployee.getId(), newEmployee);
            return employees.get(newEmployee.getId());
        } else {
            throw new EmployeeAlreadyExistException("Email is already used");
        }


    }

    public boolean isEmployeePresent(String id) {
        return employees.containsKey(id);
    }

    public Employee removeEmployee(String id) {
        return employees.remove(id);
    }

    public Employee getEmployeeById(String id) {
        return employees.get(id);
    }

    public Employee updateEmployee(String id, Employee employee) throws EmployeeAlreadyExistException {
        if (isEmailUniqueOnUpdatedEmployee(employee, employees)) {
            employees.remove(id);
            employees.put(employee.getId(), employee);
            return employees.get(employee.getId());
        } else {
            throw new EmployeeAlreadyExistException("Email is already used");
        }

    }

    public Set<String> getAllEmployeesIDs() {
        return employees.keySet();
    }

    private static boolean isEmailUnique(Employee employee, Map<String, Employee> employeeMap) {
        for (Employee existingEmployee : employeeMap.values()) {
            if (existingEmployee.getEmail().equals(employee.getEmail())) {
                return false;
            }
        }
        return true;
    }

    private static boolean isEmailUniqueOnUpdatedEmployee(Employee updatedEmployee, Map<String, Employee> employeeMap) {
        for (Employee existingEmployee : employeeMap.values()) {
            if (existingEmployee.getEmail().equals(updatedEmployee.getEmail()) && updatedEmployee.getId().equals(existingEmployee.getId())) {
                return true;
            }
        }
        for (Employee existingEmployee : employeeMap.values()) {
            if (existingEmployee.getEmail().equals(updatedEmployee.getEmail())) {
                return false;
            }
        }
        return true;
    }

}
