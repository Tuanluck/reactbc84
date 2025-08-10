import React from "react";
import Register from "./../Pages/Register";
import { NavLink } from "react-router-dom";

const HeaderHome = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Cybersoft
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="navbar-collapse " id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-white text-dark nav-link" : "nav-link"
              }
              style={({isActive})=> isActive ? {border:'2px solid orange'}:{}}
              to="/"
              aria-current="page"
            >
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-white text-dark nav-link" : "nav-link"
              }
              style={({ isActive }) =>
                isActive ? { border: "2px solid orange" } : {}
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-white text-dark nav-link" : "nav-link"
              }
              style={({ isActive }) =>
                isActive ? { border: "2px solid orange" } : {}
              }
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              react-router-dom
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/react-router-dom/demo-use-navigate">
                Demo use navigate
              </NavLink>
              <NavLink className="dropdown-item" to="/react-router-dom/use-search-param">
                Demo use search param
              </NavLink>
            </div>
          </li>
        </ul>
        <form className="d-flex my-2 my-lg-0">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default HeaderHome;
