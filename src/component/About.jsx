import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="aboutnav">
        <Link to="/Product">Products</Link>
        <Link to="Services">Services</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default About;
