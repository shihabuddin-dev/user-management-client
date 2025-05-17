import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-6 max-w-5xl mx-auto px-2">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Root;
