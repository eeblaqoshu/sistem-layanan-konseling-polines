import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col space-y-8 bg-[#F8F9FD]">
        <main className="flex-1 ">
          <Outlet />
        </main>
        <Footer className="mt-8" />
      </div>
    </div>
  );
}
