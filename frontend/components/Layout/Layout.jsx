import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-[#fafafa]">
      <Sidebar />
      <div className="w-full">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
