const { ethers } = require("hardhat");

async function main() {
  const EmployeeStreamFactory = await ethers.getContractFactory(
    "EmployeeStream"
  );

  const EmployeeStreamContract = await EmployeeStreamFactory.deploy();

  await EmployeeStreamContract.deployed();

  console.log("Contract is deployed on: ", EmployeeStreamContract.address);
}

main();

//EmployeeStream 0x4844a27ce0Dd6C4f348A7A88f586d90D029E0bac
