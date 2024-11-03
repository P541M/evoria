import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-backgroundPrimary bg-opacity-50 backdrop-blur-md backdrop-filter text-textAccent shadow-sm h-16 fixed top-0 w-full z-50 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
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
            to="/scentful-stories"
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
