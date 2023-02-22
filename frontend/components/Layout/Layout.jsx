import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-[#DFECF1]">
      <Sidebar />
      <div className="w-full">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
