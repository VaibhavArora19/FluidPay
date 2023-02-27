import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { getStreams } from "@/subgraph";
import ViewStreamItem from "@/components/ViewStreamItem/ViewStreamItem";

const DUMMY_STREAMS = [
  {
    id: "s1",
    sender_address: "0x131313134145113115",
    allTimeFlow: 200023232.232,
    flowRate: 232.343,
    StartedAt: "Jan 21 2021",
  },
];

const index = () => {
  const [streams, setStreams] = useState();
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      (async function () {
        const result = await getStreams(address);
        setStreams(result);
      })();
    }
  }, [address]);

  return (
    <div className="min-h-screen">
      <div className="w-fit h-fit mx-auto my-28">
        <p className="ml-3 text-xl font-semibold font-Poppins mb-3">
          View Streams here 👇
        </p>
        <div className="w-[1000px] p-3 bg-white/60 backdrop-blur-sm  mx-auto rounded-2xl">
          <div className="flex  justify-around font-semibold font-Poppins py-6 rounded-xl text-sm text-black bg-blur bg-[#b5d2df] uppercase tracking-wider">
            <h2 className=" ">Sender</h2>
            <h2 className="">All Time Flow</h2>
            <p>Flow Rate</p>
            <p>Started At</p>
            {/* <p>is Ongoing</p> */}
          </div>

          <div>
            {DUMMY_STREAMS.map((stream) => (
              <ViewStreamItem
                sender_address={stream.sender_address}
                allTimeFlow={stream.allTimeFlow}
                startedAt={stream.StartedAt}
                flowRate={stream.flowRate}
                key={stream.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
