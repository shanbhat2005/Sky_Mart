import React from 'react'
import { useNavigate } from "react-router";

const CategoryCard = ({ name,category }) => {

let navigate= useNavigate()
    function handleClick() {
    navigate("/shop", {
      state: {
        category,
      },
    });
  }
  return (
    <div onClick={handleClick} 
    className="w-24 h-24 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-center justify-center cursor-pointer">
      <span className="text-sm font-semibold text-gray-700 text-center px-2">
        {name}
      </span>
    </div>
  );
};

export default CategoryCard;
