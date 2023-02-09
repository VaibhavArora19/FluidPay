// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract EmployeeStream {
    struct Employee {
        address userAddress;
        string name;
        uint256 age;
        string homeAddress;
    }

    mapping(address => Employee) public employees;

    Employee[] public employeeList;

    // Register employee
    // @param _userAddress - address of the employee
    // @param _name - name of the employee
    // @param _age - age of the employee
    // @param _homeAddress - home address of the employee
    function registerEmployee(
        address _userAddress,
        string memory _name,
        uint256 _age,
        string memory _homeAddress
    ) public {
        Employee memory newEmployee = Employee(
            _userAddress,
            _name,
            _age,
            _homeAddress
        );
        employees[_userAddress] = newEmployee;
        employeeList.push(newEmployee);
    }

    // Stream payment to employee
    // @dev - stream employee using the address
    // @param _userAddress - address of the employee
    function streamPayToEmployee(address _userAddress) public payable {
        // TODO: Implement this function
    }
}
