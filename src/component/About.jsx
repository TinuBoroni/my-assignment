import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="aboutnav">
        <Link to="/about">About</Link>
        <br />
        <Link to="/about/history">History</Link>
        <br />
        <Link to="/about/services">Services</Link>
      
      </div>
      <Outlet />
    </div>
  );
};
export default About;
