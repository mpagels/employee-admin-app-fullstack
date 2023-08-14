package de.mpagels.backend;

import lombok.SneakyThrows;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;

public class EmployeeServiceTest {

    @SneakyThrows
    @Test
    public void create_whenCreateWithValidCar_thenNoError() {
        EmployeeRepository employeeRepository = Mockito.mock(EmployeeRepository.class);
        EmployeeService employeeService = new EmployeeService(employeeRepository);

        employeeService.addEmployee(new Employee("123456", "Martin", "Pagels", "martin@neuefische.de", "Coach"));

        Mockito.verify(employeeRepository).save(new Employee("123456", "Martin", "Pagels", "martin@neuefische.de", "Coach"));
    }

    @Test
    public void getAll_whenGetAll_thenReturnCorrectList() {
        EmployeeRepository employeeRepository = Mockito.mock(EmployeeRepository.class);
        EmployeeService employeeService = new EmployeeService(employeeRepository);

        Mockito.when(employeeRepository.findAll()).thenReturn(List.of(
                new Employee("123456", "Martin", "Pagels", "martin@neuefische.de", "Coach"),
                new Employee("123457", "Martin", "Pagels", "martin2@neuefische.de", "Coach")
        ));

        Assertions.assertEquals(
                List.of(
                        new Employee("123456", "Martin", "Pagels", "martin@neuefische.de", "Coach"),
                        new Employee("123457", "Martin", "Pagels", "martin2@neuefische.de", "Coach")
                ),
                employeeService.getAllEmployees()
        );

        Mockito.verify(employeeRepository).findAll();
    }
}
