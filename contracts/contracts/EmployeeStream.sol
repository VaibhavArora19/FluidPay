// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract EmployeeStream {
    struct Employee {
        address userAddress;
        string name;
        string companyName;
    }

    struct Employer {
        address userAddress;
        string name;
        string companyName;
    }

    mapping(address => Employee) public employees;
    mapping(string => Employee[]) public employeesByCompanyName;
    mapping(address => string) public employerOfCompany;
    mapping(string => address) public employerByCompanyName;

    Employer[] public employers;

    // modifier to check if the caller is the employer of that company
    // @param _companyName - name of the company
    modifier onlyEmployer(string memory _companyName) {
        require(
            compare(employerOfCompany[msg.sender], _companyName),
            "Only employer can call this function"
        );
        _;
    }

    // Register employer
    // @param _companyName - name of the company
    function registerEmployer(string memory _name, string memory _companyName)
        public
    {
        require(
            compare(employerOfCompany[msg.sender], ""),
            "registerEmployer: Employer already registered"
        );
        Employer memory employer = Employer(msg.sender, _name, _companyName);
        employers.push(employer);

        employerOfCompany[msg.sender] = _companyName;
        employerByCompanyName[_companyName] = msg.sender;
    }

    // Register employee
    // @param _userAddress - address of the employee
    // @param _name - name of the employee
    // @param _age - age of the employee
    // @param _homeAddress - home address of the employee
    function registerEmployee(
        address _userAddress,
        string memory _name,
        string memory _companyName
    ) public onlyEmployer(_companyName) {
        Employee memory employee = Employee({
            userAddress: _userAddress,
            name: _name,
            companyName: _companyName
        });
        employeesByCompanyName[_companyName].push(employee);
        employees[_userAddress] = employee;
    }

    // Stream payment to employee
    // @dev - stream employee using the address
    // @param _userAddress - address of the employee
    function streamPayToEmployee(
        address _userAddress,
        string memory _companyName
    ) public payable onlyEmployer(_companyName) {
        // TODO: Implement this function
    }

    // compare two strings
    // @param str1 - first string
    // @param str2 - second string
    // @return - true if strings are equal, false otherwise
    function compare(string memory str1, string memory str2)
        public
        pure
        returns (bool)
    {
        return
            keccak256(abi.encodePacked(str1)) ==
            keccak256(abi.encodePacked(str2));
    }
}
