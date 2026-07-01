import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Profile from "../assets/Navbar/Profile.png";
import PanahBawah from "../assets/Navbar/PanahBawah.png";
import Notifikasi from "../assets/Navbar/Alarm.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Beranda", href: "/home" },
    { name: "Layanan", href: "/layanan-informasi" },
    { name: "Konselor", href: "/konselor" },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent bg-white backdrop-blur-sm shadow-md">
      <div className="flex max-w-6xl mx-auto px-4 py-4 justify-between items-center">
        {/* Nama Judul */}
        <div className="flex flex-row space-x-2">
          <img
            src={Logo}
            alt="logo"
            className="w-10 h-10 justify-center items-center top-2 my-auto"
          />
          <div className="flex flex-col  text-left">
            <Link to="/" className="poppins-semibold text-lg text-black">
              POLINES
            </Link>
            <span className="poppins-light text-xs">Layanan Konseling</span>
          </div>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex flex-row space-x-24 text-sm poppins-regular">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="hover:text-purple-700 text-black transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex flex-row space-x-2 justify-center items-center">
          <Link to="/">
            <img src={Notifikasi} alt="Panah" className="w-6 h-6 mr-2" />
          </Link>
          <img
            src={Profile}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="poppins-regular text-sm text-black">Slamet</span>
          <Link to="/">
            <img src={PanahBawah} alt="PanahBawah" className="w-5 h-5" />
          </Link>
        </div>

        {/* Hamburger Button Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col px-4 pb-4 space-y-3 bg-white/90 backdrop-blur-sm poppins-medium text-lg">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="block hover:text-purple-700 text-black transition py-1"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          {/* Tombol Login Mobile */}
          <li>
            <Link
              to="/login"
              className="block text-center bg-purple-500 poppins-medium hover:bg-purple-700 text-white px-4 py-2 rounded-md transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              PROFILE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
