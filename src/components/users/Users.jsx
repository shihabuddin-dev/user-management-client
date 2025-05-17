import React from "react";
import Button from "../ui/Button";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router";

const Users = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 max-w-5xl mx-auto">
      <Button
        onClick={() => navigate("/addUser")}
        variant="outline"
        className="flex items-center gap-1"
      >
        New User <FaUser />
      </Button>
      <div className="overflow-x-auto mt-6">
        <table className="table">
          {/* head */}
          <thead className="bg-black text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            <tr>
              <th>1</th>
              <td>Shihab</td>
              <td>shihab@gmail.com</td>
              <td>Male</td>
              <td>Active</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
