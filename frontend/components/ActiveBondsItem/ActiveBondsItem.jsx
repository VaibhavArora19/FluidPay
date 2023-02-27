import React from "react";
import {getApproval} from "../../ERC20/erc20";
import {ethers} from "ethers";
import { useContract, useAccount, useSigner} from "wagmi";
import { salaryBondABI, salaryBondContract } from "@/constants";

const ActiveBondsItem = ({id, address, from, to, amount, registeredAmt }) => {
  const {data: signer} = useSigner();
  const account = useAccount();
  const contract = useContract({
    address: salaryBondContract,
    abi: salaryBondABI,
    signerOrProvider: signer
  });
  
  let startDate = new Date(Number(from));
  let endDate = new Date(Number(to));

  startDate = startDate.toString();
  endDate = endDate.toString();


  const acceptBondHandler = async () => {

    await getApproval(ethers.utils.parseEther(registeredAmt));
    await contract?.buyBond(id);

  };

  return (
    <div className="flex items-start justify-between w-[750px] p-6 rounded-2xl shadow-md bg-[#D0E1E9]">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between">
          <p className="font-semibold flex jus text-gray-500 text-2xl font-Poppins items-center gap-2">
            <span className="text-green-700"> ${amount}</span>
          </p>

          <p>
            Req. Amt:{" "}
            <span className="text-yellow-600 font-semibold">
              ${registeredAmt}
            </span>
          </p>
        </div>

        <div className="flex gap-10">
          <p className="text font-Pragati font-semibold text-lg">
            from - {startDate}
          </p>
          <p className="text font-Pragati font-semibold text-lg">to - {endDate}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm flex gap-2 items-start">
            by:
            <span className="text-sm font-semibold text-gray-500">
              {address}
            </span>
          </p>
          <button
            onClick={acceptBondHandler}
            className="font-semibold py-2 px-7 text-white bg-[#1e1e1e] font-Poppins rounded-xl hover:bg-black/70"
          >
            Accept!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveBondsItem;
