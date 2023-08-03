package de.mpagels.backend;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Employee {
    private String id;
    private String firstName;
    private String lastName;
    private String email;
}
