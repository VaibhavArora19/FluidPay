import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" text-black py-6 top-0 z-[20] fixed  w-full">
      <div className="flex justify-between w-[90%] mx-auto items-center">
        <h2
          //   onClick={homepageHandler}
          className="font-Grotesk font-semibold text-2xl cursor-pointer"
        >
          FluidPay
        </h2>

        
      </div>
    </nav>
  );
};

export default Navbar;
