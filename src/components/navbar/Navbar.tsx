"use client";
import React from "react";
import NavbarLogo from "./NavbarLogo.tsx";
import NavLinks from "./NavLinks.tsx";
import AuthButtons from "./AuthButtons.tsx";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center w-full">
      <header className="flex items-center px-6 py-3 bg-white/90 max-md:px-4 max-sm:px-2 rounded-full w-fit">
        <div className="flex justify-center items-center gap-4 max-md:gap-3">
          <NavbarLogo/>
          <NavLinks />
          <AuthButtons />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
