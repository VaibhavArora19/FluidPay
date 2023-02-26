// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SalaryBond {
    // Bond struct
    struct Bond {
        uint256 id;
        address seller;
        uint256 amount;
        uint256 start;
        uint256 end;
        uint256 expectedAmount;
        bool paid;
        address buyer;
    }

    uint256 public totalBonds;

    mapping(uint256 => Bond) public bonds;

    ///@dev One user can only create bond once
    mapping(address => bool) public bondByUser;

    ///@dev Purchased bonds by a user
    mapping(address => Bond[]) public purchasedBonds;

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
        require(!bondByUser[msg.sender], "Bond already exists");

        totalBonds += 1;

        Bond memory bond = Bond(
            totalBonds,
            msg.sender,
            _amount,
            _start,
            _end,
            _expectedAmount,
            false,
            address(0)
        );
        bonds[totalBonds] = bond;
        bondList.push(bond);
    }

    // Buy a bond
    // @param _employee - employee address
    // transfer the bond amount to the employee
    // Need to transfer ACL permissions to the buyer
    function buyBond(uint256 _id) public payable {
        require(_id <= totalBonds, "Bond does not exist");
        require(bonds[_id].seller == address(0), "Bond already active");
        require(!bonds[_id].paid, "Bond already paid");
        require(msg.value == bonds[_id].amount, "Insufficient amount");
        require(
            bonds[_id].start >= block.timestamp &&
                bonds[_id].end >= block.timestamp,
            "Bond not active"
        );

        bonds[_id].buyer = msg.sender;
    }

    ///@dev this function should be executed only when stream has been started in user account
    function executeBond(uint256 _id) public {
        require(!bonds[_id].paid, "Bond already paid");
        require(bonds[_id].buyer != address(0), "No buyer");

        ///@dev if the stream has not been started after more than 2 hours of expected time send the funds back to buyer
        if (block.timestamp > bonds[_id].start + 2 hours && !bonds[_id].paid) {
            (bool isSent, ) = bonds[_id].buyer.call{value: bonds[_id].amount}(
                ""
            );
            require(isSent, "Transaction failed");
        }

        ///Check the flow here if flow incoming then start the stream from seller account to buyer account and send the funds to seller

        (bool sent, ) = bonds[_id].seller.call{value: bonds[_id].amount}("");
        require(sent, "Transaction failed");
    }

    ///@dev Call this function if cheating happened
    ///i.e. if a seller stopped the stream after getting his funds
    function slash() public {}

    function getPurchasedBonds(address _address)
        public
        view
        returns (Bond[] memory)
    {
        return purchasedBonds[_address];
    }

    receive() external payable {}

    fallback() external payable {}
}
