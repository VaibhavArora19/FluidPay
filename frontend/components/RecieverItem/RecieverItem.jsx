import Image from "next/image";
import React, { useEffect } from "react";

const RecieverItem = ({ address, companyName }) => {
  const recieverHandler = () => {
    console.log("Reciever Handler");
  };
  return (
    <div className="flex items-start justify-between w-[750px] p-6 rounded-2xl shadow-md bg-[#D0E1E9]">
      <div className="flex flex-col gap-5">
        <p className="font-semibold text-gray-500 font-Poppins flex items-center gap-2">
          <span>
            <Image src="/eth.png" height={20} width={20} alt="icon" />
          </span>
          {address}
        </p>
        <p className="text font-Pragati font-bold text-xl">{companyName}</p>
      </div>

      <button
        onClick={recieverHandler}
        className="font-semibold py-2 px-7 text-white bg-[#1e1e1e] font-Poppins rounded-xl hover:bg-black/70"
      >
        Stream
      </button>
    </div>
  );
};

export default RecieverItem;
