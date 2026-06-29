import React from "react";
import "./Navbar.css";
import { LayoutDashboard, FolderKanban, Target, Clock3 } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>
          Build<span>Book</span>
        </h1>

        <div className="list">
          <ul>
            <li>
              <NavLink to="/">
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              {" "}
              <NavLink to="/projects">
                <FolderKanban size={20} />
                <span>Projects</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/goals">
                <Target size={20} />
                <span>Goals</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/sessions">
                <Clock3 size={20} />
                <span>Sessions</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="about">
        <img
          src="https://ui-avatars.com/api/?name=Samia&background=6C63FF&color=fff"
          alt=""
        />

        <div>
          <h4>Samia Siddique</h4>
          <p>Full Stack Developer</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
