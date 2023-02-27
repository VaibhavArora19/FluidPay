import { ethers } from "ethers";
import { salaryBondContract } from "@/constants";

const ERC20_ABI = [
    "function approve(address spender, uint256 amount) external returns(bool)"
]

const address = '0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e';

export const getApproval = async (amount) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(address, ERC20_ABI, signer);
    const approval = await contract?.approve(salaryBondContract, amount);
};