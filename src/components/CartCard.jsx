import React from "react";
import { Star } from "lucide-react";

const CartCard = ({ product }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex gap-5">

      <div className="w-32 h-32 bg-white rounded-xl overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-3"
        />
      </div>

      <div className="flex-1 flex flex-col">

        <h2 className="text-white text-xl font-semibold">
          {product.title}
        </h2>

        <p className="text-gray-400 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

          <span className="text-yellow-400 font-medium">
            {product.rating.rate}
          </span>

          <span className="text-gray-500 text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>

      </div>

      <div className="flex flex-col justify-center items-center min-w-24">

        <span className="text-gray-400 text-sm">
          Quantity
        </span>

        <div className="mt-2 px-4 py-2 rounded-lg bg-lime-400 text-black font-bold text-lg">
          {product.quantity}
        </div>

      </div>

    </div>
  );
};

export default CartCard;