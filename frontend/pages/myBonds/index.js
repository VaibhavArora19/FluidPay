import MyBondItem from "@/components/MyBondItem/MyBondItem";
import React from "react";

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
  return (
    <div className="min-h-screen">
      <div className="mt-20">
        <div className="w-fit mx-auto">
          <p className="text-left font-Grotesk text-xl mb-2 ml-2 font-semibold">
            My Bonds 👇
          </p>
          {DUMMY_BONDS.map((bond) => (
            <div className=" mb-3">
              <MyBondItem
                key={bond.id}
                amount={bond.amount}
                registeredAmt={bond.registered_amt}
                buyer_address={bond.buyer_address}
                streamer_address={bond.streamer_address}
                seller_address={bond.seller_address}
                toTime={bond.to}
                fromTime={bond.from}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBonds;
