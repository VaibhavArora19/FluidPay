import React from "react";

const ViewStreamItem = ({
  sender_address,
  allTimeFlow,
  flowRate,
  startedAt,
}) => {
  return (
    <div className="flex items-center text-gray-400 py-3  rounded-xl mt-2 bg-blur bg-[#474747]">
      <h2 className=" flex-[0.25] text-center font-semibold text-white">
        {sender_address.substr(0, 5)+"..."+sender_address.substr(37, 42)}
      </h2>
      <p className="flex-[0.25] text-center">{allTimeFlow}</p>
      <p className="flex-[0.25] text-center text-white font-Grotesk">
        {flowRate}
      </p>
      <p className="flex-[0.25] text-center">{startedAt}</p>
      {/* <p className="flex-[0.25] text-center">2000</p> */}
    </div>
  );
};

export default ViewStreamItem;
