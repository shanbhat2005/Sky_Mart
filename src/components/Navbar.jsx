import React, { useContext, useState } from "react";
import { Zap, ShoppingCart, LogOut } from "lucide-react";
import { useNavigate,useLocation } from "react-router";
import { Auth } from "../context/Authcontext";

export default function Navbar() {

  let {loggedInUser}=useContext(Auth)

  let navigate= useNavigate()
  let location= useLocation();


 
  function handleLogoutClick() {

localStorage.removeItem("loggedInUser")
navigate("/")
    
  }

  return (
    <div className="flex items-center justify-between px-6 py-4 md:px-10 bg-black text-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-lime-400 flex items-center justify-center">
          <Zap className="w-5 h-5 text-black fill-black" />
        </div>
        <span className="text-xl font-bold tracking-tight">
          Sky<span className="text-white">Mart</span>
        </span>
      </div>

      {/* Nav links (hardcoded buttons, no loop) */}
      <div className="hidden md:flex items-center gap-8 text-sm">
        <button navigate="/home"
          onClick={()=>{navigate("/home");
             
            }}
          className={
            location.pathname === "/home"
              ? "text-lime-400 font-medium"
              : "text-gray-400 hover:text-white transition"
          }
        >
          Home
        </button>

       <button
  onClick={() => navigate("/shop")}
  className={
    location.pathname === "/shop"
      ? "text-lime-400 font-medium"
      : "text-gray-400 hover:text-white transition"
  }
>
  Shop
</button>

        <button
          className={
            location.pathname === "/about"
              ? "text-lime-400 font-medium"
              : "text-gray-400 hover:text-white transition"
          }
        >
          About
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 border border-gray-700 rounded-full pl-1 pr-4 py-1">
          <div className="w-6 h-6 rounded-full bg-lime-400 text-black text-xs font-bold flex items-center justify-center">
            S
          </div>
          <span className="text-sm">{loggedInUser.name}</span>
        </div>
        <button
          
          className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-900 transition"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
        <button
          onClick={handleLogoutClick}
          className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-900 transition"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}