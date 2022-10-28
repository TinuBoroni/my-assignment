import { NavLink } from "react-router-dom";

// create a Navbar component
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Ariete</div>
      <div className="nav-link">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "grey" } : { color: "white" }
          }
          className="nav-link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "grey" } : { color: "white" }
          }
          className="nav-link"
          to="/Product"
        >
          My Store
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "grey" } : { color: "white" }
          }
          className="nav-link"
          to="/users"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
