// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import { 
    ISuperfluid 
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

import { 
    ISuperToken 
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol";

import {
    SuperTokenV1Library
} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SalaryBond {

    using SuperTokenV1Library for ISuperToken;
    ISuperToken public token = ISuperToken(0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f);
    IERC20 public usdcMumbai = IERC20(0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e);

    // Bond struct
    struct Bond {
        uint id;
        address seller;
        uint256 amount;
        uint256 start;
        uint256 end;
        uint256 expectedAmount;
        bool paid;
        address buyer;
        address streamer;
    }

    uint public totalBonds;

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
    function createBond(uint256 _amount, uint256 _start, uint256 _end, uint256 _expectedAmount, address streamer) public {
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
            address(0),
            streamer
        );
        bonds[totalBonds] = bond;
        bondList.push(bond);
    }

    // Buy a bond
    // @param _employee - employee address
    // transfer the bond amount to the employee
    // Need to transfer ACL permissions to the buyer
    function buyBond(uint _id) public payable {
        require(_id <= totalBonds, "Bond does not exist");
        require(bonds[_id].seller == address(0), "Bond already active");
        require(!bonds[_id].paid, "Bond already paid");
        require(bonds[_id].start >= block.timestamp && bonds[_id].end >= block.timestamp, "Bond not active");

        ///@dev approve in the frontend before calling this function
        usdcMumbai.transferFrom(msg.sender, address(this), bonds[_id].expectedAmount);
        bonds[_id].buyer = msg.sender;        
    }

    ///@dev this function should be executed only when stream has been started in user account
    function executeBond(uint _id) public {
         require(!bonds[_id].paid, "Bond already paid");
         require(bonds[_id].buyer != address(0), "No buyer");
         require(msg.sender == bonds[_id].seller, "You are not the seller");

        ///@dev if the stream has not been started after more than 2 hours of expected time send the funds back to buyer
         if(block.timestamp > bonds[_id].start + 2 hours && !bonds[_id].paid) {
            (bool isSent, ) = bonds[_id].buyer.call{value: bonds[_id].amount}("");
            require(isSent, "Transaction failed");
         }

         ///Check the flow here if flow incoming then start the stream from seller account to buyer account and send the funds to seller
         (, int96 flowRate, ,) = token.getFlowInfo(bonds[_id].streamer, bonds[_id].seller);
         
         require(flowRate > 0, "No flow exist");
         token.createFlowFrom(bonds[_id].seller, bonds[_id].buyer, flowRate);   
         bonds[_id].paid = true;
         (bool sent, ) = bonds[_id].seller.call{value: bonds[_id].amount}("");
         require(sent, "Transaction failed");        
        
    }

    ///@dev buyer can get back funds if the seller didn't started the stream yet
    function getFundsBack(uint _id) public {
        require(msg.sender == bonds[_id].buyer, "You are not the buyer");
        require(bonds[_id].paid == false, "Bond already executed");
        require(block.timestamp > bonds[_id].start + 2 hours, "Bond not started yet");

        (bool sent, ) = bonds[_id].seller.call{value: bonds[_id].amount}("");

        require(sent, "Transaction failed");
    }

    ///@dev Call this function if cheating happened 
    ///i.e. if a seller stopped the stream after getting his funds   
    function slash() public {

    }

    receive() external payable{}
    fallback() external payable{}
}
