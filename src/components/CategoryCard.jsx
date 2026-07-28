import React from "react";
import { useNavigate } from "react-router";

const CategoryCard = ({ name, category }) => {
  const navigate = useNavigate();

  const images = {
    electronics:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",

    "men's clothing":
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",

    "women's clothing":
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",

    jewelery:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600",
  };

  function handleClick() {
    navigate("/shop", {
      state: {
        category,
      },
    });
  }

  return (
    <div
      onClick={handleClick}
      className="relative h-56 rounded-2xl overflow-hidden cursor-pointer group border border-[#2A2F36]"
    >
      <img
        src={images[category]}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1114]/90 via-[#0E1114]/25 to-transparent group-hover:from-[#0E1114]/80 transition"></div>

      <span className="absolute left-4 top-4 w-3 h-3 rounded-full bg-[#0E1114]/70 border border-white/30"></span>

      <div className="absolute bottom-5 left-5">
        <h2
          className="text-[#EFEAE1] text-2xl"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {name}
        </h2>

        <p
          className="text-[#E3A23C] text-sm mt-1"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Explore Collection →
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;