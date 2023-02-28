import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const RecieverItem = ({ address, companyName, name }) => {
  const router = useRouter();

  const recieverHandler = () => {
    router.push(`/stream?userAddress=${address}`);
  };
  return (
    <div className="flex items-start justify-between w-[750px] p-6 rounded-2xl shadow-md bg-[#D0E1E9] tracking-wider">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <p className="text font-Pragati font-bold text-xl">{name}</p>

          <p className="font-semibold text-gray-500 font-Poppins flex items-center gap-2">
            <span>
              <Image src="/eth.png" height={20} width={20} alt="icon" />
            </span>
            {address}
          </p>
        </div>
        <p className="text font-Pragati font-bold text-xl flex gap-4 ">
          Company :{" "}
          <p className="font-semibold text-gray-500 font-Poppins flex items-center gap-2">
            {companyName}
          </p>
        </p>
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
