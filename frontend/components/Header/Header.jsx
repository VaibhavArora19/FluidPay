import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <div className="flex justify-end py-3 px-5 fixed w-full  bg-[#DFECF1]">
      <ConnectButton  />
    </div>
  );
};

export default Header;
