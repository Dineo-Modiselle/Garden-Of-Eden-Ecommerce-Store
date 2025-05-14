import React, { useState } from "react";
import logo from "../assets/logo.png";

import { FaHeadset, FaCartShopping, FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#ff9770] shadow-md ">
      <div className="p-1 m-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="cursor-pointer">
            {" "}
            {/* Shift logo to the left */}
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 ">
            <button className="text-gray-600 hover:text-coral-700 relative">
              <FaUser className="w-6 h-6 fill-gray-700" />
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="text-gray-600 hover:text-coral-700 relative">
              <FaCartShopping className="w-6 h-6 fill-gray-700" />
              <span className="absolute -top-2 -right-2 bg-coral-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="text-gray-600 hover:text-coral-700">
              <FaHeadset 
              onClick={() => navigate("/support")}
              className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
