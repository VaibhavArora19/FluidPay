import Link from "next/link";
import { BsPencilSquare } from "react-icons/bs";

const links = [
  {
    name: "Register",
    icon: <BsPencilSquare size={20} />,
    link: "/",
  },
  {
    name: "Stream",
    icon: <BsPencilSquare size={20} />,
    link: "/register",
  },
  {
    name: "Reciever",
    icon: <BsPencilSquare size={20} />,
    link: "/register",
  },
  {
    name: "Upcoming Stream",
    icon: <BsPencilSquare size={20} />,
    link: "/register",
  },
  {
    name: "Active Bond",
    icon: <BsPencilSquare size={20} />,
    link: "/register",
  },
  {
    name: "Create Bond",
    icon: <BsPencilSquare size={20} />,
    link: "/register",
  },
];

const Sidebar = () => {
  return (
    <section className="w-72 min-h-screen p-3 pr-5 bg-[#fafafa]">
      <h2 className="text-3xl font-semibold mb-8">Gnosis</h2>
      {links.map((link, i) => (
        <Link key={i} href={link.link}>
          <div className="flex items-center gap-2 py-3 px-2 mb-4 rounded-md shadow hover:bg-[#ebebeb]">
            <p>{link.icon}</p>
            <p>{link.name}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Sidebar;
