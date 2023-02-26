import ActiveBondsItem from "@/components/ActiveBondsItem/ActiveBondsItem";
import React from "react";

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
  return (
    <div className="h-screen">
      <div className="mt-20">
        <div className="w-fit mx-auto">
          <p className="text-left font-Grotesk text-lg mb-2 ml-2 font-semibold">
            Active Bonds 👇
          </p>
          {DUMMY_BONDS.map((item) => (
            <div className=" mb-3">
              <ActiveBondsItem
                key={item.id}
                address={item.address}
                from={item.from}
                amount={item.amount}
                registeredAmt={item.registeredAmt}
                to={item.to}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveBonds;
