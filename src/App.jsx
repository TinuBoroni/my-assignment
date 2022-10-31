import { useState } from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import Services from "./component/Services";
import Nav from "./component/Nav";
import { ErrorBoundary } from "react-error-boundary";
import User from "./component/User";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Fallback from "./component/Fallback";
import userDetails from "./component/userDetails";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setActive] = useState(false);
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback}>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />

          </Route>
          <Route path="Product" element={<Product />} />
          <Route path="user" element={<User />} />
          <Route path="userDetails" element={<userDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
