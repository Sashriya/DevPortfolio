import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";



function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Projects", link: "/project" },
    { id: 4, name: "Skills", link: "/skills" },
    { id: 5, name: "Certifications", link: "/certifications" },
    { id: 6, name: "Contact", link: "/contact"}
  ];

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <h1 className="text-3xl bg-linear-to-r from-blue-500 to-teal-500 inline-block text-transparent bg-clip-text font-bold italic">
          PortFolio
        </h1>
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6 text-lg font-semibold">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className="hover:text-teal-400 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col p-4 space-y-3 text-lg font-semibold">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="block p-2 rounded hover:bg-gray-700 transition"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
