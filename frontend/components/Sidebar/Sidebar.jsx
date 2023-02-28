import Link from "next/link";
import React, { useContext, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaBook, FaGamepad, FaHome } from "react-icons/fa";
import {
  BsMusicNoteBeamed,
  BsPeopleFill,
  BsPencilSquare,
} from "react-icons/bs";
import { AiOutlineCodeSandbox, AiFillTrophy } from "react-icons/ai";
import { FiDownloadCloud } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
// import { accountShortner } from "@/utils/accountShortner";

import Image from "next/image";
import { useRouter } from "next/router";
// import { WalletContext } from "../context/WalletContext";

const links = [
  {
    name: "Register",
    icon: <MdDashboard size={20} />,
    link: "/register",
  },
  {
    name: "Stream",
    icon: <FaGamepad size={20} />,
    link: "/stream",
  },
  {
    name: "Reciever",
    icon: <FaBook size={20} />,
    link: "/reciever",
  },
  {
    name: "View Stream",
    icon: <BsMusicNoteBeamed size={20} />,
    link: "/viewStream",
  },
  {
    name: "Active Bond",
    icon: <AiOutlineCodeSandbox size={20} />,
    link: "/activeBonds",
    // line: true,
  },
  {
    name: "Create Bond",
    icon: <MdDashboard size={20} />,
    link: "/createBond",
  },
  {
    name: "My Bonds",
    icon: <IoMdSettings size={20} />,
    link: "/myBonds",
  },
  {
    name: "Home",
    icon: <FaHome size={20} />,
    link: "/",
  },
];

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // const { currentAccount } = useContext(WalletContext);

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div
      className={`bg-[#1e1e1e] fixed h-[97vh] z-10  m-3 rounded-xl   ${
        openMenu ? "w-72" : "w-16"
      }  text-gray-100 p-3 duration-300`}
    >
      <div className="flex justify-end">
        <HiMenuAlt3
          size={25}
          className={`cursor-pointer mb-10 mt-4 ${!openMenu && "w-12"}`}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </div>

      <div className="flex flex-col gap-4 realtive mt-4">
        {links.map((link, i) => (
          <Link
            key={link.name}
            href={link.link}
            className={`flex gap-2 items-center font-medium ${
              currentRoute === link.link ? "bg-gray-500" : ""
            }  hover:bg-gray-600 rounded-md p-2 group ${link?.line && "mb-5"}`}
          >
            <div className="">{link.icon}</div>
            <p
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !openMenu && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {link.name}
            </p>
            <p
              className={`${
                openMenu && "hidden"
              } absolute left-48 z-10 bg-white font-semibold whitespace-pre w-0 text-gray-900 rounded-md drop-shadow-lg shadow-xl p-0  overflow-hidden group-hover:scale-110 group-hover:left-20 group-hover:duration-300 group-hover:w-fit group-hover:px-2 group-hover:py-1`}
            >
              {link.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
