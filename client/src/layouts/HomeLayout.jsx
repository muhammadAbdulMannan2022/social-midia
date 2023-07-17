import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
