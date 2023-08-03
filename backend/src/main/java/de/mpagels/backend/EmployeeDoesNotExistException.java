package de.mpagels.backend;

public class EmployeeDoesNotExistException extends Exception {

    public EmployeeDoesNotExistException(String message) {
        super(message);
    }

    public EmployeeDoesNotExistException(String message, Throwable cause) {
        super(message, cause);
    }
}
