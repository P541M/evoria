import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    handleResize();
    handleClickOutside();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fade-in-two fixed top-0 z-50 w-full bg-black text-base text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <h1 className="flex-1 text-center font-playfair text-2xl sm:flex-none sm:text-left">
          <Link to="/" className="transition duration-200 hover:text-offWhite">
            Evoria
          </Link>
        </h1>

        <button
          ref={buttonRef}
          className="absolute right-4 transition duration-200 hover:text-offWhite focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
        >
          ☰
        </button>

        <div className="hidden space-x-4 md:flex">
          <Link
            to="/chapters"
            className="transition duration-200 hover:text-offWhite"
          >
            Evoria Chapters
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
        <div
          id="navbar-menu"
          ref={dropdownRef}
          className="absolute left-0 top-16 w-full bg-black pb-4 text-center transition-transform duration-300 ease-in-out md:hidden"
        >
          <Link
            to="/chapters"
            className="block py-2 text-lg transition duration-200 hover:text-offWhite"
            onClick={() => setIsOpen(false)}
          >
            Evoria Chapters
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
