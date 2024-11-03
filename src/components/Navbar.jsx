import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-opacity-90 bg-white text-gray-800 shadow-sm py-4 transition duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-serif font-bold">
          <Link to="/" className="hover:text-gray-600">
            Scentful Stories
          </Link>
        </h1>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className={`${isOpen ? "block" : "hidden"} md:flex space-x-4`}>
          <Link to="/" className="hover:text-gray-600 transition duration-200">
            Home
          </Link>
          <Link
            to="/fragrance-picks"
            className="hover:text-gray-600 transition duration-200"
          >
            Scent Stories
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
