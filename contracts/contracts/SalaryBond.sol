// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SalaryBond {
    // Bond struct
    struct Bond {
        address employee;
        uint256 amount;
        uint256 start;
        uint256 end;
        uint256 expectedAmount;
        bool paid;
    }

    mapping(address => Bond) public bonds;
    Bond[] public bondList;

    // Create a bond
    // @param _amount - amount of bond
    // @param _start - start date of bond
    // @param _end - end date of bond
    // @param _expectedAmount - expected amount of bond
    // store the bond in the bonds mapping
    // Need to ADD ACL permission to this function
    function createBond(
        uint256 _amount,
        uint256 _start,
        uint256 _end,
        uint256 _expectedAmount
    ) public {
        require(
            bonds[msg.sender].employee == address(0),
            "Bond already exists"
        );
        Bond memory bond = Bond(
            msg.sender,
            _amount,
            _start,
            _end,
            _expectedAmount,
            false
        );
        bonds[msg.sender] = bond;
        bondList.push(bond);
    }

    // Buy a bond
    // @param _employee - employee address
    // transfer the bond amount to the employee
    // Need to transfer ACL permissions to the buyer
    function buyBond(address _employee) public payable {
        Bond memory bond = bonds[_employee];
        require(bond.employee != address(0), "Bond does not exist");
        require(bond.paid == false, "Bond already paid");
        require(msg.value == bond.expectedAmount, "Incorrect amount");
        bond.paid = true;
        bonds[_employee] = bond;
        payable(_employee).transfer(msg.value);
    }
}
