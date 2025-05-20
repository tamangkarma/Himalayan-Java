import React from "react";
import { navData } from "../../data/navData";
import { NavLink } from "react-router";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-secondary to-primary/90 text-white flex justify-between items-center p-4">
        <div>
          <img className="h-16 sm:h-14 md:h-12 ml-6 text-white" src="/public/coffee photo/java-newlogo.png" alt="logo" />
        </div>
        <div>
          <ul className="space-x-6 text-black/80 hidden sm:flex sm:mr-0 md:mr-6 ">
            {navData.map((index) => (
              <li key={index} className="hover:text-black hover:scale-90 duration-150">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active underline underline-offset-4 text-black" : ""
                  }
                  to={index.url}
                >
                  {index.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div>
            <IoMenu  className="text-black sm:hidden"/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
