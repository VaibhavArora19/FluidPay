import ActiveBondsItem from "@/components/ActiveBondsItem/ActiveBondsItem";
import React, { useEffect, useState } from "react";
import {useContract, useSigner, useAccount} from "wagmi"; 
import { salaryBondABI, salaryBondContract } from "@/constants";
import { ethers } from "ethers";

const DUMMY_BONDS = [
  {
    id: "a1",
    amount: 2022.43,
    from: "22/12/2022",
    to: "23/03/2024",
    registeredAmt: 900,
    address: "0x123456789012899q4q4525625",
  },
  {
    id: "a2",
    amount: 2022.43,
    from: "22/12/2022",
    to: "23/03/2024",
    registeredAmt: 900,
    address: "0x123456789012899q252425624",
  },
  {
    id: "a3",
    amount: 2022.43,
    from: "22/12/2022",
    to: "23/03/2024",
    registeredAmt: 900,
    address: "0x12345678901289934255242",
  },
];

const ActiveBonds = () => {
  const [bonds, setBonds] = useState([]);
  const {data: signer} = useSigner();
  const {address} = useAccount();
  const contract = useContract({
    address: salaryBondContract,
    abi: salaryBondABI,
    signerOrProvider: signer
  })

  useEffect(() => {

    if(address && contract) {

      (async function() {
        const allBonds = await contract?.getAllBonds();
        if(allBonds) {
          let activeBonds = allBonds.filter(bond => bond.paid === false);
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
          {bonds && bonds.map((item) => (
            <div className=" mb-3">
              <ActiveBondsItem
                key={item.id.toString()}
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
