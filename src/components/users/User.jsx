import React from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router";

const User = ({ user, i, handleDeleteUser }) => {
  const { _id, name, email, gender, status } = user || {};
  const navigate = useNavigate();

  return (
    <tr className="hover:bg-indigo-50">
      <th className="border-b-1">{i + 1}</th>
      <td className="border-b-1">{name}</td>
      <td className="border-b-1">{email}</td>
      <td className="border-b-1">{gender}</td>
      <td className="border-b-1">{status}</td>
      <td className="border-b-1">
        <div className="space-x-1">
          <button
            onClick={() => navigate(`/editUser/${_id}`)}
            className="btn btn-xs bg-indigo-50 hover:bg-white shadow-2xl"
          >
            <MdEdit className="text-indigo-500 text-lg" />
          </button>
          <button
            onClick={() => handleDeleteUser(_id)}
            className="btn btn-xs bg-indigo-50 hover:bg-white shadow-2xl"
          >
            <MdDeleteForever className="text-red-500 text-lg" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default User;
