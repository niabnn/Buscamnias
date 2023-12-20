"use client";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
        <a
          href="/"
          aria-label="Company"
          title="Hello minesweeper!"
          className="inline-flex items-center"
        >
          <img
            className="w-8 text-deep-purple-accent-400"
            src="\styles\images\logo.png"
            alt="happy face logo"
          ></img>
        </a>
        <div className="lg:hidden ">
            Hello Minesweeper!
        </div>
      </div>
    </div>
  );
};

export default Navbar;
