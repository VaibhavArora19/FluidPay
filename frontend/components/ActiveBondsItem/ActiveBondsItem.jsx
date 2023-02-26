import React from "react";

const ActiveBondsItem = ({ address, from, to, amount, registeredAmt }) => {
  let startDate = new Date(Number(from));
  let endDate = new Date(Number(to));

  startDate = startDate.toString();
  endDate = endDate.toString();


  const acceptBondHandler = () => {
    console.log("Bond Accepted!");
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
            from - {startDate.substr(0, 15)}
          </p>
          <p className="text font-Pragati font-semibold text-lg">to - {endDate.substr(0, 15)}</p>
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
