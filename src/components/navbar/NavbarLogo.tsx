import React from "react";
import logoRV from "../../assets/logoRV.png";


const NavbarLogo: React.FC = () => {
  return (
    <div className="flex gap-8 items-center">
      <img
        src={logoRV}
        alt="RecruVision logo"
        className="h-[83px] w-[99px] max-sm:h-[50px] max-sm:w-[60px]"
      />
      <h1 className="text-3xl font-bold leading-8 text-secondary max-md:text-3xl max-sm:text-2xl">
        RecruVision
      </h1>
    </div>
  );
};

export default NavbarLogo;
