import MyBondItem from "@/components/MyBondItem/MyBondItem";
import React, {use, useEffect, useState} from "react";
import { salaryBondABI, salaryBondContract } from "@/constants";
import { useAccount, useSigner, useContract } from "wagmi";

const DUMMY_BONDS = [
  {
    id: "b1",
    amount: 2000.2,
    registered_amt: 200.1,
    seller_address: "0x10233209403950350394",
    streamer_address: "0x898592895209402940224",
    buyer_address: "0x787488101949490149184918",
    to: "12:02:23",
    from: "24:00:00",
  },
];

const MyBonds = () => {
  const [myBonds, setMyBonds] = useState([]);
  const {address} = useAccount();
  const {data: signer} = useSigner();
  const contract = useContract({
    address: salaryBondContract,
    abi: salaryBondABI,
    signerOrProvider: signer
  })

  useEffect(() => {

    if(address && contract) {
      (async function() {
        const bonds = await contract?.getAllBonds();
        const filteredBonds = bonds.filter(bond => {
          return bond.buyer.toLowerCase() === address.toLowerCase() || bond.seller.toLowerCase() === address.toLowerCase()
        });

        console.log('f', filteredBonds)
        setMyBonds(filteredBonds);

      })();
    }

  }, [address, contract]);

  return (
    <div className="min-h-screen">
      <div className="mt-28">
        <div className="w-fit mx-auto">
          <p className="text-left font-Grotesk text-xl mb-2 ml-2 font-semibold">
            My Bonds 👇
          </p>
          {myBonds.length > 0 && myBonds.map((bond) => (
            <div className=" mb-3">
              <MyBondItem
                key={bond.id}
                amount={bond.amount.toString()}
                registeredAmt={bond.expectedAmount.toString()}
                buyer_address={bond.buyer}
                streamer_address={bond.streamer}
                seller_address={bond.seller}
                toTime={bond.end.toString()}
                fromTime={bond.start.toString()}
                isPaid={bond.paid}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBonds;
