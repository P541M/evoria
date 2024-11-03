import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-backgroundPrimary text-textAccent shadow-sm h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-serif font-bold">
          <Link to="/" className="hover:text-textAccent/70">
            Scentful Stories
          </Link>
        </h1>
        <button
          className="md:hidden text-textAccent focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className={`${isOpen ? "block" : "hidden"} md:flex space-x-4`}>
          <Link
            to="/"
            className="hover:text-textAccent/70 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/fragrance-picks"
            className="hover:text-textAccent/70 transition duration-200"
          >
            Scent Stories
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
