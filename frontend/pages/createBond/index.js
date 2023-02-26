import React, { useState } from "react";

const CreateBond = () => {
  const [streamAmount, setStreamAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [requiredMoney, setRequiredMoney] = useState("");

  const createBondHandler = (e) => {
    e.preventDefault();

    console.log("Bond Created!");
  };

  return (
    <>
      <main className=" h-screen  bg-[#DFECF1] py-28">
        <div className="w-fit mx-auto">
          <h2 className="text-2xl ml-2 mb-4 font-semibold font-Grotesk">
            Create Bond 👇
          </h2>
          <form
            onSubmit={createBondHandler}
            className="flex flex-col font-Poppins w-[600px] bg-[#D0E1E9] shadow-2xl rounded-2xl p-10 mx-auto "
          >
            <label
              htmlFor="stream_amount"
              className=" font-semibold text-lg mb-1"
            >
              Stream Amount
            </label>
            <input
              required
              className="border py-3 px-2 rounded-md bg-gray-200 mb-7"
              id="stream_amount"
              placeholder="4202.34 $"
              onChange={(e) => {
                setStreamAmount(e.target.value);
              }}
              value={streamAmount}
            />

            <div className="flex justify-between">
              <div className="flex flex-col">
                <label
                  htmlFor="start_date"
                  className=" font-semibold text-lg mb-1"
                >
                  Start Date
                </label>
                <input
                  required
                  className="border w-[250px] py-3 px-2 rounded-md bg-gray-200 text-gray-400 mb-7"
                  id="start_date"
                  type="date"
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                  value={startDate}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="end_date"
                  className=" font-semibold text-lg mb-1"
                >
                  End Date
                </label>
                <input
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  value={endDate}
                  id="end_date"
                  required
                  className="p-3 rounded-lg w-[250px]  bg-gray-200 text-gray-400 focus:shadow-outline border-2 border-gray-300 mb-5"
                  type="date"
                />
              </div>
            </div>

            <label htmlFor="company" className="font-semibold text-lg mb-1">
              Required Money
            </label>
            <input
              className="border py-3 px-2 rounded-md bg-gray-200  mb-7"
              id="required_money"
              placeholder="200.10 $"
              onChange={(e) => {
                setRequiredMoney(e.target.value);
              }}
              value={requiredMoney}
            />

            <button
              type="submit"
              className="bg-[#1e1e1e] py-3 uppercase tracking-wider  text-white font-semibold text-lg rounded-lg hover:bg-[black]"
            >
              Create Bond
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default CreateBond;
