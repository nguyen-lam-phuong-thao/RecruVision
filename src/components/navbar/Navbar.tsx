"use client";
import React from "react";
import NavbarLogo from "./NavbarLogo.tsx";
import NavLinks from "./NavLinks.tsx";
import AuthButtons from "./AuthButtons.tsx";

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center px-10 py-5 bg-white shadow-md max-md:px-5 max-sm:px-2">
      <div className="flex justify-center items-center w-full max-md:gap-5">
        <NavbarLogo/>
        <NavLinks />
        <AuthButtons />
      </div>
    </header>
  );
};

export default Navbar;
