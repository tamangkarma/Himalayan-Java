import React from "react";
import { navData } from "../../data/navData";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-secondary to-secondary/90 text-white flex justify-between items-center p-4 sm:text-sm">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <ul className="flex space-x-4 mr-10 ">
            {navData.map((index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active underline underline-offset-4" : ""
                  }
                  to={index.url}
                >
                  {index.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
