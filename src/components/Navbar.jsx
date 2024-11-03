import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-300">
            Fragrance Picks
          </Link>
        </h1>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className={`${isOpen ? "block" : "hidden"} md:flex space-x-4`}>
          <Link to="/" className="hover:text-blue-300 transition duration-200">
            Home
          </Link>
          <Link
            to="/fragrance-picks"
            className="hover:text-blue-300 transition duration-200"
          >
            Fragrance Picks
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
