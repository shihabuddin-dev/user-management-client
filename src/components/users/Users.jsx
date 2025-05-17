import React, { useState } from "react";
import Button from "../ui/Button";
import { FaUser } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";
import User from "./User";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  const navigate = useNavigate();

  // delete user
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
              Swal.fire({
                icon: "success",
                title: "Account has been deleted",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div>
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
            {users.map((user, i) => (
              <User
                key={i}
                user={user}
                i={i}
                handleDeleteUser={handleDeleteUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
