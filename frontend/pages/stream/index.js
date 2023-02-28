import Head from "next/head";
import { useState } from "react";
import { useAccount} from "wagmi";
import { createFlow } from "@/superfluid/Flow";
import {useRouter} from "next/router";

const Stream = () => {
  const [address, setAddress] = useState("");
  const [flowRate, setFlowRate] = useState("");
  const [selectedType, setSelectedType] = useState("Time");
  const account = useAccount();
  const router = useRouter();

  const {userAddress} = router.query

  const registerHandler = async (event) => {
    event.preventDefault();

    let flowRatePerSecond;

    if(selectedType === "/Month"){
      flowRatePerSecond =  flowRate/2628002; 
    
    }else if(selectedType === "/Day") {
      flowRatePerSecond = flowRate/86400;
    
    }else {
      flowRatePerSecond = flowRate
    
    }
    await createFlow(account.address, userAddress ? userAddress : address, flowRatePerSecond)
  };

  return (
    <>
      <main className=" h-screen  bg-[#DFECF1] py-40">
        <div className="w-fit mx-auto">
          <h2 className="text-2xl ml-2 mb-4 font-semibold font-Grotesk">Stream here 👇</h2>
          <form
            onSubmit={registerHandler}
            className="flex flex-col font-Poppins w-[650px] bg-[#D0E1E9] shadow-2xl rounded-2xl p-10 mx-auto "
          >
            <label htmlFor="add" className=" font-semibold text-lg mb-1">
              Address
            </label>
            <input
              // ref={enteredAddress}
              required
              className="border py-3 px-2 rounded-md bg-gray-200 mb-7"
              id="add"
              placeholder="0x00000000000000000"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={userAddress ? userAddress: address}
            />

            <div className="flex gap-10">
              <div className="flex flex-col">
                <label htmlFor="flow" className=" font-semibold text-lg mb-1">
                  Flow Rate
                </label>
                <input
                  required
                  className="border w-[330px] py-3 px-2 rounded-md bg-gray-200 mb-7"
                  id="flow"
                  placeholder="flow rate"
                  onChange={(e) => {
                    setFlowRate(e.target.value);
                  }}
                  value={flowRate}
                />
              </div>

              <div className="flex flex-col">
                <label className=" font-semibold text-lg mb-1">
                  Time Frame
                </label>
                <select
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                  }}
                  value={selectedType}
                  id="DataType"
                  name="Type"
                  required
                  className=" p-3 rounded-lg w-[200px]  focus:outline-none bg-gray-200 text-gray-400 focus:shadow-outline border-2 border-gray-300 mb-5"
                >
                  <option value="Time">Time</option>
                  <option value="Yearly">/Month</option>
                  <option value="Monthly">/Day</option>
                  <option value="Daily">/Second</option>
                </select>
              </div>
            </div>

            <label htmlFor="company" className="font-semibold text-lg mb-1">
              Token
            </label>
            <input
              // ref={enteredCompany}
              className="border py-3 px-2 rounded-md bg-gray-200 cursor-not-allowed mb-7"
              id="company"
              disabled
              placeholder="fDAIx"
              onChange={(e) => {
                setToken(e.target.value);
              }}
            />

            <button
              type="submit"
              className="bg-[#1e1e1e] py-3 uppercase tracking-wider  text-white font-semibold text-lg rounded-lg hover:bg-[black]"
            >
              Stream
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Stream;
