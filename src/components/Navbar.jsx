import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fade-up fixed top-0 z-50 w-full bg-black text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <h1 className="font-playfair flex-1 text-center text-2xl sm:flex-none sm:text-left">
          <Link to="/" className="transition duration-200 hover:text-offWhite">
            Scentful Stories
          </Link>
        </h1>

        <button
          className="absolute right-4 transition duration-200 hover:text-offWhite focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <div className="hidden space-x-4 md:flex">
          <Link
            to="/stories"
            className="transition duration-200 hover:text-offWhite"
          >
            Scent Stories
          </Link>
          <Link
            to="/vocab"
            className="transition duration-200 hover:text-offWhite"
          >
            Vocab
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="fade-in-background absolute left-0 top-16 w-full bg-black bg-opacity-90 py-4 text-center">
          <Link
            to="/stories"
            className="block py-2 text-lg transition duration-200 hover:text-offWhite"
            onClick={() => setIsOpen(false)}
          >
            Scent Stories
          </Link>
          <Link
            to="/vocab"
            className="block py-2 text-lg transition duration-200 hover:text-offWhite"
            onClick={() => setIsOpen(false)}
          >
            Vocab
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
