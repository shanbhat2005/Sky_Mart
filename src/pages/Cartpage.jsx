import React, { useContext } from "react";
import { Cart } from "../context/Cartcontext";
import CartCard from "../components/CartCard";
import { useNavigate } from "react-router";

const Cartpage = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(Cart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const handleCheckout = () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  alert("🎉 Order placed successfully!");

  setCart([]);

  navigate("/home");
};

  return (
    <div
      className="min-h-screen bg-[#0E1114] text-[#EFEAE1] px-6 py-8 md:px-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      <div className="mb-8">
        <h1
          className="text-4xl md:text-5xl"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Your Cart
        </h1>

        <p
          className="text-[#8B9199] mt-2"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {cart.length} items in your cart
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 bg-[#14181C] border border-[#2A2F36] rounded-3xl p-6 flex flex-col gap-5">

          {cart.length > 0 ? (
            cart.map((product) => (
              <CartCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="text-center py-20 text-[#8B9199]">
              Your cart is empty.
            </div>
          )}

        </div>

        <div className="h-fit sticky top-8 bg-[#14181C] border border-[#2A2F36] rounded-3xl p-6">

          <h2
            className="text-2xl mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Order Summary
          </h2>

          <div className="flex justify-between text-[#8B9199] mb-4">
            <span>Products</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between text-[#8B9199] mb-6">
            <span>Shipping</span>
            <span className="text-[#E3A23C]">Free</span>
          </div>

          <div className="border-t border-dashed border-[#2A2F36] pt-6 flex justify-between items-center">

            <div>
              <p className="text-[#8B9199] text-sm">
                Total
              </p>

              <h1
                className="text-4xl font-extrabold text-[#E3A23C]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ${total.toFixed(2)}
              </h1>
            </div>

          </div>

         <button
  onClick={handleCheckout}
  className="w-full mt-8 bg-[#E3A23C] text-[#14181C] font-bold py-4 rounded-2xl hover:bg-[#EEB55C] transition-all duration-300"
>
  Proceed to Checkout
</button>

        </div>

      </div>

    </div>
  );
};

export default Cartpage;