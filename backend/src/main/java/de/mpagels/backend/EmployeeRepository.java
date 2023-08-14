package de.mpagels.backend;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {

    boolean existsEmployeeById(String id);
}
