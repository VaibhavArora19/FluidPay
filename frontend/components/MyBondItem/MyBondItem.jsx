import { ethers } from "ethers";
import { useSigner, useContract, useAccount } from "wagmi";
import { salaryBondABI, salaryBondContract } from "@/constants";

const MyBondItem = ({
  amount,
  registeredAmt,
  seller_address,
  buyer_address,
  streamer_address,
  fromTime, 
  toTime,
  isPaid,
  id
}) => {
  const {address} = useAccount();
  const {data: signer} = useSigner();
  const contract = useContract({
    address: salaryBondContract,
    abi: salaryBondABI,
    signerOrProvider: signer
  })
  let start = new Date(Number(fromTime));
  let end = new Date(Number(toTime));

  start = start.toString();
  end = end.toString();

  const executeBondHandler = async () => {
    
    await contract?.executeBond(id);
  };

  return (
    <div className="flex items-start justify-between w-[750px] p-6 rounded-2xl shadow-md bg-[#D0E1E9]">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between">
          <p className="font-semibold flex jus text-gray-500 text-2xl font-Poppins items-center gap-2">
            <span className="text-green-700"> ${ethers.utils.formatEther(amount)}</span>
          </p>

          <p>
            Req. Amt:{" "}
            <span className="text-yellow-600 font-semibold">
              ${ethers.utils.formatEther(registeredAmt)}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex gap-2 items-start">
              <p className="w-24">Seller</p>

              <p className="font-semibold tracking-wider text-gray-500">
                : {seller_address.substr(0, 10)+"..."+seller_address.substr(32, 42)}
              </p>
            </div>

            <div className="flex gap-4">
              <p className="text font-Pragati font-semibold text-lg">
                from - {start.substr(3, 21)}
              </p>
              <p className="text font-Pragati font-semibold text-lg">
                to - {end.substr(4, 21)}
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-start">
              <p className="w-24">Streamer</p>

              <p className="font-semibold tracking-wider text-gray-500">
                : {streamer_address.substr(0, 10)+"..."+streamer_address.substr(32, 42)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center -mt-4">
          <div className="flex justify-between">
            <div className="flex gap-2 items-start">
              <p className="w-24">Buyer</p>

              <p className="font-semibold tracking-wider text-gray-500">
                : {buyer_address==="0x0000000000000000000000000000000000000000" ? "No Buyer" : buyer_address.substr(0, 10)+"..."+buyer_address.substr(32,42)}
              </p>
            </div>
          </div>
          {address === seller_address && 
          <button
            onClick={executeBondHandler}
            className="font-semibold py-3 px-7 text-white bg-[#1e1e1e] font-Poppins rounded-xl hover:bg-black/70"
          >
            {isPaid ? "Executed": "Execute Bond"}
          </button>}
        </div>
      </div>
    </div>
  );
};

export default MyBondItem;
