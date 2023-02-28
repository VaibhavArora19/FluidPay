import ActiveBondsItem from "@/components/ActiveBondsItem/ActiveBondsItem";
import React, { useEffect, useState } from "react";
import { useContract, useSigner, useAccount } from "wagmi";
import { salaryBondABI, salaryBondContract } from "@/constants";
import { ethers } from "ethers";

const ActiveBonds = () => {
  const [bonds, setBonds] = useState([]);
  const { data: signer } = useSigner();
  const { address } = useAccount();
  const contract = useContract({
    address: salaryBondContract,
    abi: salaryBondABI,
    signerOrProvider: signer,
  });

  useEffect(() => {
    if (address && signer) {
      (async function () {
        const allBonds = await contract?.getAllBonds();
        if (allBonds) {
          let activeBonds = allBonds.filter((bond) => bond.paid === false);
          setBonds(activeBonds);
        }
      })();
    }
  }, [address, contract]);

  return (
    <div className="h-screen">
      <div className="mt-20">
        <div className="w-fit mx-auto">
          <p className="text-left font-Grotesk text-lg mb-2 ml-2 font-semibold">
            Active Bonds 👇
          </p>
          {bonds &&
            bonds.map((item) => (
              <div className=" mb-3">
                <ActiveBondsItem
                  key={item.id.toString()}
                  id={item.id.toString()}
                  address={item.seller}
                  from={item.start.toString()}
                  amount={ethers.utils.formatEther(item.amount)}
                  registeredAmt={ethers.utils.formatEther(item.expectedAmount)}
                  to={item.end.toString()}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveBonds;
