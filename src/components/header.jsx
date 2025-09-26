import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation(); 

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700";

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Innovatech Logo" className="h-8 w-auto" />
          <span className="font-bold text-xl text-gray-800">Innovatech</span>
        </div>

        <nav className="hidden md:flex space-x-8 font-medium">
          <button
            onClick={() => navigate("/")}
            className={`${isActive("/")} hover:text-blue-600 transition`}
          >
            Home
          </button>
          <button
            onClick={() => navigate("/services")}
            className={`${isActive("/services")} hover:text-blue-600 transition`}
          >
            Services
          </button>
          <button
            onClick={() => navigate("/about")}
            className={`${isActive("/about")} hover:text-blue-600 transition`}
          >
            About
          </button>
          <button
            onClick={() => navigate("/contact")}
            className={`${isActive("/contact")} hover:text-blue-600 transition`}
          >
            Contact
          </button>
        </nav>

        <button className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </header>
  );
}
