import RecieverItem from "@/components/RecieverItem/RecieverItem";
import React, {useEffect, useState} from "react";
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
  const [employees, setEmployees] = useState([]);
  const contract = useContract({
    address: EmployeeStreamContract,
    abi: EmployeeStreamABI,
    signerOrProvider: signer
  });

  useEffect(() => {

    if(address && contract){

      (async function() {

        const getCompany = await contract?.employerOfCompany(address);

        if(getCompany){
          const totalEmployees = await contract?.getEmployeesByCompanyName(getCompany);
          setEmployees(totalEmployees)
        }
        

      
      })();

    }
  }, [address, contract]);

  return (
    <div className="min-h-screen">
      <div className="mt-20">
        <div className="w-fit mx-auto">
          <p className="text-left font-Grotesk text-lg mb-2 ml-2 font-semibold">List of all the recievers 👇</p>
          {employees.length > 0 && employees.map((item) => (
            <div className=" mb-3">
              <RecieverItem
                key={item.userAddress}
                address={item.userAddress}
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
