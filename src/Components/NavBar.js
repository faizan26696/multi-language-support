import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-purple-500 flex  justify-between p-[1.5rem] ">
      <nav>
        <Link
          className=" text-[18px] mr-[2rem] bg-purple-300 rounded-[6px] p-[0.6rem]  text-white no-underline font-semibold  hover:bg-purple-700 duration-500"
          to="/"
        >
          Home
        </Link>

        <Link
          className=" text-[18px] mr-[2rem] bg-purple-300 rounded-[6px] p-[0.6rem] text-white no-underline font-semibold hover:bg-purple-700 duration-500 "
          to="/about"
        >
          About
        </Link>
      </nav>
      <LanguageSwitcher />
    </div>
  );
};

export default NavBar;
