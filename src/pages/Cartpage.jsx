import React, { useContext } from "react";
import { Cart } from "../context/CartContext";
import CartCard from "../components/CartCard";

const Cartpage = () => {

  const {cart}= useContext(Cart)
  return (
    <div className="min-h-screen bg-black text-white px-6 py-8 md:px-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Your Cart
        </h1>

        <p className="text-gray-400 mt-2">
          0 items in your cart
        </p>
      </div>

      {/* Cart Items Container */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-5">
{cart.map((product)=>{
  return <CartCard key={product.id} product={product}/>

})}

        {/* Example */}
        {/* <CartCard product={item} /> */}

      </div>

    </div>
  );
};

export default Cartpage;