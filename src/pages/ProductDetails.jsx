import React from "react";
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { Product } from "../context/ProductsContext";
import { Cart } from "../context/Cartcontext";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate= useNavigate()

const { products } = useContext(Product);
const { cart,addToCart ,removeFromCart} = useContext(Cart);
const product = products.find((item) => item.id == id);
const handleAddToCart = () => {
  const alreadyInCart = cart.find((item) => item.id === product.id);

  addToCart(product);

  if (alreadyInCart) {
    alert("Product quantity updated!");
  } else {
    alert("Product added to cart!");
  }
};
const handleBuyNow = () => {
  alert("Order placed successfully!");

  removeFromCart(product.id);

  navigate("/home");
};
if (!product) {
  return <h1>Loading...</h1>;
}
console.log(product);

return (
  <div
    className="min-h-screen bg-[#0E1114] text-[#EFEAE1] px-6 py-10 md:px-16"
    style={{ fontFamily: "'Inter', sans-serif" }}
  >

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div className="bg-[#14181C] rounded-3xl p-10 flex items-center justify-center border border-[#2A2F36] shadow-2xl">

        <img
          src={product.image}
          alt={product.title}
          className="h-[420px] object-contain hover:scale-110 transition duration-500"
        />

      </div>

      <div>

        <span
          className="inline-block bg-[#E3A23C] text-[#14181C] font-semibold px-4 py-2 rounded-full capitalize mb-5"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {product.category}
        </span>

        <h1
          className="text-5xl leading-tight"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {product.title}
        </h1>

        <div className="flex items-center gap-3 mt-6">

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-2xl ${
                  i < Math.round(product.rating.rate)
                    ? "text-[#E3A23C]"
                    : "text-[#3A4048]"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          <span
            className="text-[#8B9199] text-lg"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {product.rating.rate} ({product.rating.count} Reviews)
          </span>

        </div>

        <div className="mt-8 relative pl-4">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0E1114] border border-[#3A4048]" />

          <p className="text-[#8B9199] uppercase tracking-widest text-sm">
            Price
          </p>

          <h2
            className="text-6xl font-extrabold text-[#E3A23C]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ${product.price}
          </h2>

        </div>

        <div className="mt-10">

          <h3
            className="text-2xl mb-4"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Description
          </h3>

          <p className="text-[#C9CDD3] leading-8 text-lg">
            {product.description}
          </p>

        </div>

        <div className="flex gap-5 mt-12">

         <button
  onClick={handleAddToCart}
  className="bg-[#E3A23C] text-[#14181C] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 shadow-lg"
>
  Add to Cart
</button>

          <button onClick={handleBuyNow}
            className="border border-[#3A4048] px-8 py-4 rounded-2xl hover:border-[#8B9199] transition"
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>

  </div>
);
};

export default ProductDetails;