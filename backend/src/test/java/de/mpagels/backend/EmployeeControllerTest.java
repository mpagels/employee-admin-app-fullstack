package de.mpagels.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class EmployeeControllerTest {
    @Autowired
    private MockMvc mvc;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Test
    void getAllEmployees_shouldReturnEmptyList_whenRepositoryIsEmpty() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/api/employees"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[]"));
    }

    @DirtiesContext
    @Test
    void getAllEmployees_shouldReturnListWithOneObject_whenOneObjectWasSavedInRepository() throws Exception {
        Employee employee = new Employee("123456", "Martin", "Pagels", "martin@neuefische.de", "Coach");
        employeeRepository.save(employee);

        mvc.perform(MockMvcRequestBuilders.get("/api/employees"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                        [
                           {
                             "id": "123456",
                             "firstName": "Martin",
                             "lastName": "Pagels",
                             "email": "martin@neuefische.de",
                             "role": "Coach"
                           }
                         ]
                        """
                ));
    }

    @DirtiesContext
    @Test
    void addEmployee_shouldReturnCreatedEmployees() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/api/employees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                 {
                                      "id": "123457",
                                      "firstName": "Martin",
                                      "lastName": "Pagels",
                                      "email": "martin@neuefische.de",
                                      "role": "Coach"
                                  }
                                """
                        ))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                         {
                            "id": "123457",
                            "firstName": "Martin",
                            "lastName": "Pagels",
                            "email": "martin@neuefische.de",
                            "role": "Coach"
                          }
                        """
                ));
    }

    @DirtiesContext
    @Test
    void addEmployee_shouldReturnStatusCode304_whenEmployeeIsAlreadyInRepositoryCheckedThroughId() throws Exception {
        Employee employee = new Employee("123456", "Martin", "Pagels", "martin@neuefische.de", "Coach");
        employeeRepository.save(employee);

        mvc.perform(MockMvcRequestBuilders.post("/api/employees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                 {
                                      "id": "123456",
                                      "firstName": "Martin",
                                      "lastName": "Pagels",
                                      "email": "martin@neuefische.de",
                                      "role": "Coach"
                                  }
                                """
                        ))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @DirtiesContext
    @Test
    void deleteEmployee_shouldReturnDeletedEmployee() throws Exception {
        Employee employee = new Employee("123456", "Martin", "Pagels", "martin@neuefische.de", "Coach");
        employeeRepository.save(employee);

        mvc.perform(MockMvcRequestBuilders.delete("/api/employees/123456"))
                .andExpect(MockMvcResultMatchers.status().isOk());

    }


    @Test
    void deleteEmployee_shouldReturn404_whenNoEmplyoeeWasFoundToDelete() throws Exception {
        mvc.perform(MockMvcRequestBuilders.delete("/api/employees/123456"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @DirtiesContext
    @Test
    void updateEmployee_shouldReturnUpdatedEmployee_whenEmailWasChanged() throws Exception {
        Employee employee = new Employee("123456", "Martin", "Pagels", "martin@neuefische.de", "Coach");
        employeeRepository.save(employee);
        mvc.perform(MockMvcRequestBuilders.put("/api/employees/123456")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                 {
                                     "id": "123456",
                                     "firstName": "Martin der zweite",
                                     "lastName": "Pagels",
                                     "email": "robert@neuefische.de",
                                     "role": "Coach"
                                 }
                                """
                        ))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                         {
                             "id": "123456",
                             "firstName": "Martin der zweite",
                             "lastName": "Pagels",
                             "email": "robert@neuefische.de",
                             "role": "Coach"
                         }
                        """
                ));
    }@DirtiesContext
    @Test
    void updateEmployee_shouldReturnUpdatedEmployee_whenNameWasChanged() throws Exception {
        Employee employee = new Employee("123456", "Martin", "Pagels", "martin@neuefische.de", "Coach");
        employeeRepository.save(employee);
        mvc.perform(MockMvcRequestBuilders.put("/api/employees/123456")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                 {
                                     "id": "123456",
                                     "firstName": "Martin der dritte",
                                     "lastName": "Pagels",
                                     "email": "martin@neuefische.de",
                                     "role": "Coach"
                                 }
                                """
                        ))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                          {
                                     "id": "123456",
                                     "firstName": "Martin der dritte",
                                     "lastName": "Pagels",
                                     "email": "martin@neuefische.de",
                                     "role": "Coach"
                                 }
                        """
                ));
    }
    @DirtiesContext
    @Test
    void updateEmployee_shouldReturn304_whenUpdatedEmployeeHasEmailThatIsAlreadyUsed() throws Exception {
        Employee employee = new Employee("123456", "Martin", "Pagels", "martin@neuefische.de", "Coach");
        Employee employee2 = new Employee("123457", "Robert", "Hoffmann", "robert@neuefische.de", "Coach");
        employeeRepository.save(employee);
        employeeRepository.save(employee2);
        
        mvc.perform(MockMvcRequestBuilders.put("/api/employees/123457")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                 {
                                     "id": "123457",
                                     "firstName": "Robert",
                                     "lastName": "Hoffmann",
                                     "email": "martin@neuefische.de",
                                     "role": "Coach"
                                 }
                                """
                        ))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
    
    @DirtiesContext
    @Test
    void addEmployee_shouldReturn302_whenNewEmployeeHasEmailThatIsAlreadyInUse() throws Exception {
        Employee employee = new Employee("123456", "Martin", "Pagels", "martin@neuefische.de", "Coach");
        employeeRepository.save(employee);
        mvc.perform(MockMvcRequestBuilders.post("/api/employees")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                 {
                                     "id": "123457",
                                     "firstName": "Martin der zweite",
                                     "lastName": "Pagels",
                                     "email": "martin@neuefische.de",
                                     "role": "Coach"
                                 }
                                """
                        ))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
