import React from "react";

const AuthButtons: React.FC = () => {
  return (
    <div className="flex gap-5 items-center max-md:gap-4 max-sm:gap-2.5">
      <button className="text-xl font-bold leading-5 text-black cursor-pointer max-md:text-lg max-sm:text-base">
        Login
      </button>
      <button className="px-5 py-3.5 text-xl text-white bg-black rounded-xl cursor-pointer max-md:text-lg max-sm:px-4 max-sm:py-2.5 max-sm:text-base">
        Sign Up
      </button>
    </div>
  );
};

export default AuthButtons;
