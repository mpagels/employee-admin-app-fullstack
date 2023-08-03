package de.mpagels.backend;

public class EmployeeAlreadyExistException extends Exception{
    public EmployeeAlreadyExistException(String message) {
        super(message);
    }

    public EmployeeAlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }
}
