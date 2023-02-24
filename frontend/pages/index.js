import Head from "next/head";
import { useRef, useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("0x00000000000000000");
  const [company, setCompany] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Gnosis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-[85vh] bg-[#DFECF1]">
        <form
          onSubmit={registerHandler}
          className="flex flex-col font-Poppins w-[750px] bg-[#D0E1E9] shadow-2xl rounded-2xl p-10 mx-auto  mt-28"
        >
          <label htmlFor="name" className=" font-semibold text-lg mb-1">
            Name
          </label>
          <input
            required
            // ref={enteredName}
            id="name"
            className="border py-3 px-2 rounded-md bg-gray-200 mb-7"
            placeholder="John Doe"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

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
          />

          <div className="flex justify-around gap-4 font-semibold text-lg mb-7">
            <label
              htmlFor="employee"
              className="flex gap-1 items-center cursor-pointer  hover:bg-gray-300 py-4 pl-2 bg-gray-200 text-black  w-full rounded-md "
            >
              <input type="radio" name="employ" id="employee" required />
              <p>Employee</p>
            </label>

            <label
              htmlFor="employer"
              className="flex gap-1 cursor-pointer items-center hover:bg-gray-300 py-4 bg-gray-200 text-black  pl-2 w-full rounded-md "
            >
              <input type="radio"  zname="employ" id="employer" required />
              <p>Employer</p>
            </label>
          </div>

          <label htmlFor="company" className="font-semibold text-lg mb-1">
            Company Name
          </label>
          <input
            // ref={enteredCompany}
            className="border py-3 px-2 rounded-md bg-gray-200 mb-7"
            id="company"
            required
            placeholder="Space DAO"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />

          <button
            type="submit"
            className="bg-[#1e1e1e] py-3 uppercase tracking-wider  text-white font-semibold text-lg rounded-lg hover:bg-[black]"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default Home;
