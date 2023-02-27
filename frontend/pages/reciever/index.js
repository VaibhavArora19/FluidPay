import RecieverItem from "@/components/RecieverItem/RecieverItem";
import React, {useEffect} from "react";
import { useContract, useAccount, useSigner } from "wagmi";
import { EmployeeStreamABI, EmployeeStreamContract } from "@/constants";

const data = [
  {
    id: "r1",
    address: "0x8e9q40q09409409q04909q4",
    companyName: "Google",
  },
  {
    id: "r2",
    address: "0x8e9q40q09409409q04909q4",
    companyName: "Google",
  },
  {
    id: "r3",
    address: "0x8e9q40q09409409q04909q4",
    companyName: "Google",
  },
  {
    id: "r4",
    address: "0x8e9q40q09409409q04909q4",
    companyName: "Google",
  },
  {
    id: "r5",
    address: "0x8e9q40q09409409q04909q4",
    companyName: "Google",
  },
];

const index = () => {
  const {data: signer} = useSigner();
  const {address} = useAccount();

  const contract = useContract({
    address: EmployeeStreamContract,
    abi: EmployeeStreamABI,
    signerOrProvider: signer
  });

  useEffect(() => {

    console.log(contract);
    // if(address && contract){

    //   (async function() {

    //     const employees = await contract?.getEmployerByCompanyName("Livepeer");
    //     console.log(employees);
    //   })();

    // }
  }, [address, contract]);

  return (
    <div className="min-h-screen">
      <div className="mt-20">
        <div className="w-fit mx-auto">
          <p className="text-left font-Grotesk text-lg mb-2 ml-2 font-semibold">List of all the recievers 👇</p>
          {data.map((item) => (
            <div className=" mb-3">
              <RecieverItem
                key={item.id}
                address={item.address}
                companyName={item.companyName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
