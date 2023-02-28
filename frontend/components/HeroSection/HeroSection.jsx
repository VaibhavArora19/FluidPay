import { useRouter } from "next/router";
import React from "react";

const HeroSection = () => {
  const router = useRouter();

  return (
    <header className="bg-[#] h-screen bg-[url('/bg.png')] bg-center">
      <section className="w-[85%] mx-auto h-[95%] flex flex-col justify-between">
        <div className="w-[80%] mx-auto py-32 text-center mt-16">
          <h2 className="text-black font-Grotesk text-5xl mb-6 font-semibold tracking-wide leading-[50px]">
            <span className=" text-black ">
              The most intuitive way to buy and sell
            </span>{" "}
            crypto in BitTorrent Chain
          </h2>

          <p className="text-gray-600 w-[60%] mx-auto font-Poppins ">
            A Person to person decentralised crypto marketplace where user can
            sell and buy BitTorrent chain cryptocurrencies using any payment
            method.
          </p>

          <button
            onClick={() => {
              router.push("/register");
            }}
            className="py-4 px-8 mt-8 border font-Grotesk  bg-[#8fa9b5] text-white font-semibold text-xl border-gray-200 rounded-full bg-[#] hover:scale-105 transition-all 0.1s ease-in-out "
          >
            Launch App
          </button>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
