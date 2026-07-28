import React, { useContext } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Cart } from "../context/Cartcontext";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
 const { cart, addToCart, increaseQuantity, decreaseQuantity } =  useContext(Cart);

 const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div onClick={() => navigate(`/product/${product.id}`)}
     className="group bg-[#14181C] rounded-3xl overflow-hidden border border-[#2A2F36] hover:border-[#E3A23C]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col cursor-pointer"
     style={{ fontFamily: "'Inter', sans-serif" }}>

      <div className="relative h-72 bg-[#0E1114] flex items-center justify-center overflow-hidden">

        <span
          className="absolute top-4 left-4 bg-[#0E1114]/80 backdrop-blur-md text-[#EFEAE1] text-xs px-3 py-1 rounded-full capitalize border border-[#2A2F36]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-2"
        />

        <div className="absolute -bottom-10 w-48 h-48 bg-[#E3A23C]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

      </div>

      <div className="flex flex-col flex-1 p-6">

        <h2
          className="text-xl text-[#EFEAE1] line-clamp-2 leading-snug"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {product.title}
        </h2>

        <p className="text-[#8B9199] text-sm mt-3 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-5">

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(product.rating.rate)
                    ? "fill-[#E3A23C] text-[#E3A23C]"
                    : "text-[#3A4048]"
                }`}
              />
            ))}
          </div>

          <span
            className="text-sm font-medium text-[#8B9199]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {product.rating.rate}
          </span>

        </div>

<div className="mt-auto pt-6 flex items-center justify-between border-t border-dashed border-[#2A2F36]">

  <div>
    <p className="text-xs uppercase tracking-wider text-[#8B9199]">
      Price
    </p>

    <h3
      className="text-3xl font-extrabold text-[#E3A23C]"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      ${product.price}
    </h3>
  </div>

  {cartItem ? (
    <div className="flex items-center gap-4 bg-[#0E1114] border border-[#2A2F36] text-[#EFEAE1] rounded-2xl px-4 py-3">

      <button
        onClick={() => decreaseQuantity(product.id)}
        className="text-xl font-bold hover:text-[#E3A23C] transition"
      >
        -
      </button>

      <span className="text-lg font-bold">
        {cartItem.quantity}
      </span>

      <button
        onClick={() => increaseQuantity(product.id)}
        className="text-xl font-bold hover:text-[#E3A23C] transition"
      >
        +
      </button>

    </div>
  ) : (
    <button
      onClick={() => addToCart(product)}
      className="flex items-center gap-2 bg-[#E3A23C] text-[#14181C] px-5 py-3 rounded-2xl hover:bg-[#EEB55C] transition-all duration-300 font-semibold shadow-lg"
    >
      <ShoppingCart className="w-5 h-5" />
      Add
    </button>
  )}

</div>

      </div>

    </div>
  );
};

export default ProductCard;