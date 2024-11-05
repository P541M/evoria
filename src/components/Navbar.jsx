import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-backgroundPrimary bg-opacity-50 backdrop-blur-md backdrop-filter text-textAccent h-16 fixed top-0 w-full z-50 flex items-center fade-up">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        <h1 className="text-2xl font-serif font-bold text-center sm:text-left w-full sm:w-auto">
          <Link to="/scentful-stories" className="hover:text-textAccent/70">
            Scentful Stories
          </Link>
        </h1>
        <button
          className="md:hidden text-textAccent focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Links visible on larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/stories"
            className="hover:text-textAccent/70 transition duration-200"
          >
            Scent Stories
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu with fade-in background effect */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-backgroundPrimary bg-opacity-90 backdrop-blur-md backdrop-filter text-center py-4 fade-in-background">
          <Link
            to="/stories"
            className="block py-2 text-lg font-medium text-textAccent hover:text-highlight transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Scent Stories
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
