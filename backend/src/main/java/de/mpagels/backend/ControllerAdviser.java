package de.mpagels.backend;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ControllerAdviser {

    @ExceptionHandler(EmployeeAlreadyExistException.class)
    private ResponseEntity<Object> handleExeption(EmployeeAlreadyExistException e) {
        return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    }
}
