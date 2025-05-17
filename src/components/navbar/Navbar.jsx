import React from "react";
import { FaUsers } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#05DF72]">
      <p className="text-xl md:text-2xl font-semibold py-2 flex justify-center items-center gap-2">
        <FaUsers />
        User Management System
      </p>
    </div>
  );
};

export default Navbar;
