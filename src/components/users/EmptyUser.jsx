import React from "react";
import { FaUserPlus } from "react-icons/fa";
import Button from "../ui/Button";
import { useNavigate } from "react-router";

const EmptyUser = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col space-y-2 mt-8">
      <p className="uppercase text-2xl">No User Found</p>
      <Button
        onClick={() => navigate("/addUser")}
        variant="outline"
        className="flex items-center gap-1"
      >
        Add User <FaUserPlus />
      </Button>
    </div>
  );
};

export default EmptyUser;
