import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element  py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
