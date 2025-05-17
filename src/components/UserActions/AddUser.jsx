import React, { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Link } from "react-router"; // Assuming react-router-dom
import Swal from "sweetalert2";

const AddUser = () => {
  // State for form fields, initialized to match the image
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [status, setStatus] = useState("Active");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { name, email, gender, status };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "New User has been added",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // DaisyUI color classes
  const activeColorClass = "radio-success";
  const buttonColorClass = "btn-success";

  return (
    <div className="p-4 md:p-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium mb-6"
      >
        <FaAngleDoubleLeft /> All User
      </Link>

      <div className=" bg-white p-6 md:p-8 rounded-lg shadow-md border border-indigo-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-slate-700">New User</h1>
          <p className="text-slate-500 mt-2">
            Use the below form to create a new account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-500 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full focus:outline-0 focus:border-success"
              placeholder="Enter Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-500 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full focus:outline-0 focus:border-success"
              placeholder="Enter Your Email"
              required
            />
          </div>

          {/* Gender Field */}
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-2">
              Gender
            </label>
            <div className="flex items-center space-x-6">
              <div className="form-control">
                <label className="label cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                    className={`radio ${activeColorClass}`} // Apply green color for checked
                  />
                  <span className="label-text text-slate-700">Male</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                    className={`radio ${activeColorClass}`} // Apply green color for checked
                  />
                  <span className="label-text text-slate-700">Female</span>
                </label>
              </div>
            </div>
          </div>

          {/* Status Field */}
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-2">
              Status
            </label>
            <div className="flex items-center space-x-6">
              <div className="form-control">
                <label className="label cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={status === "Active"}
                    onChange={(e) => setStatus(e.target.value)}
                    className={`radio ${activeColorClass}`}
                  />
                  <span className="label-text text-slate-700">Active</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    checked={status === "Inactive"}
                    onChange={(e) => setStatus(e.target.value)}
                    className={`radio ${activeColorClass}`}
                  />
                  <span className="label-text text-slate-700">Inactive</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`btn ${buttonColorClass} w-full text-white`}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
