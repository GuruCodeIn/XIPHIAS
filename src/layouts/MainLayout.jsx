import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <Navbar />
      
      <div className="pt-28">
        <Outlet />
      </div>
    </main>
  );
}

export default MainLayout;