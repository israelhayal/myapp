// src/components/Navbar.jsx
import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi"; // Icons for search and cart
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0b022b] text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">Assistix</Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-sm uppercase">
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/products">Products</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/features">Features</Link>
        </li>
        <li className="hover:text-gray-400 cursor-pointer">
          <Link to="/contact">Contacts</Link>
        </li>
      </ul>

      {/* Search, Cart Icon, and Button */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex items-center border rounded-full bg-white px-2 py-1">
          <input
            type="text"
            placeholder="Search"
            className="text-black placeholder-gray-400 focus:outline-none px-2 py-1 w-32 sm:w-48"
          />
          <FiSearch size={20} className="text-gray-600" />
        </div>

        {/* Cart Icon */}
        <FiShoppingCart size={22} className="cursor-pointer hover:text-gray-400" />

        {/* Buy Now Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-sm py-2 px-4 rounded-md uppercase font-bold">
          Buy Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
