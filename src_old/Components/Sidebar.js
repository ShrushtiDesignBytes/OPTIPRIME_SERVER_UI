import React from "react";
import { Link } from "react-router-dom";
import { FiPieChart } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
import Logo from "../assets/Logo_New.png";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-14 h-full bg-[#030F0E] pt-2 transition-width duration-300">
      <ul className="flex flex-col items-center space-y-6">
      <li className="my-3">
          <Link to="/">
            <img src={Logo} alt="Dashboard" className="w-5 h-auto" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FiPieChart color="white" className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FiFileText color="grey" className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <SlSettings color="grey" className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
