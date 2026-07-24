import React, { useContext } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Cart } from "../context/Cartcontext";

const ProductCard = ({ product }) => {

  const {addToCart}= useContext(Cart)
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      
      {/* Image Section */}
      <div className="relative bg-gray-50 h-60 flex items-center justify-center p-6">
        <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="font-semibold text-lg text-gray-900 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(product.rating.rate)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <span className="text-sm text-gray-500">
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-5 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-lime-600">
              ${product.price}
            </p>
          </div>

          <button onClick={()=> addToCart(product)}
           className="flex items-center gap-2 bg-lime-400 hover:bg-lime-500 transition px-5 py-2.5 rounded-full font-semibold">
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;