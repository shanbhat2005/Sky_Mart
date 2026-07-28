import React from "react";
import {
  ArrowRight,
  Package,
  TrendingUp,
  Star,
  Tag,
} from "lucide-react";
import { useNavigate } from "react-router";
import CategoryCard from "../components/CategoryCard";
import { useContext } from "react";
import { Cart } from "../context/CartContext";
import { Auth } from "../context/AuthContext";

export default function Home() {
  const { loggedInUser } = useContext(Auth);
  const navigate = useNavigate();
  const { cart } = useContext(Cart);

const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

const totalPrice = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  function handleShopClick() {
    navigate("/shop");
  }
  const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {
  greeting = "GOOD MORNING";
} else if (hour < 17) {
  greeting = "GOOD AFTERNOON";
} else {
  greeting = "GOOD EVENING";
}

  return (
    <div
      className="min-h-screen bg-[#0E1114] text-[#EFEAE1] px-6 py-6 md:px-10 md:py-8"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="relative overflow-hidden rounded-3xl border border-[#2A2F36] bg-[#14181C] p-8 md:p-12 mb-6">
        <Tag className="absolute -right-6 -top-6 w-40 h-40 text-[#1D2228] rotate-12 pointer-events-none" strokeWidth={1} />

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl">
            <p
              className="text-[#E3A23C] text-sm font-semibold tracking-wide mb-4 flex items-center gap-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {greeting} <span>👋</span>
            </p>

            <h1
              className="text-5xl md:text-6xl leading-tight mb-6"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Welcome back,
              <br />
              <span className="italic text-[#E3A23C]">
  {loggedInUser?.name}!
</span>
            </h1>

            <p className="text-[#8B9199] text-base mb-8 max-w-md">
              Discover today's picks — hand-curated products across
              electronics, fashion, and more.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={handleShopClick}
                className="bg-[#E3A23C] text-[#14181C] font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#EEB55C] transition"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </button>

             <button
  onClick={() => navigate("/shop")}
  className="border border-[#3A4048] px-6 py-3 rounded-full font-medium hover:border-[#8B9199] transition"
>
  View All Products
</button>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-64">
            <div className="bg-[#181C21] border border-[#3A2A16] rounded-2xl px-6 py-6 text-center">
              <div
                className="text-4xl font-extrabold text-[#E3A23C]"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                20+
              </div>
              <div className="text-[#C9CDD3] text-sm mt-1">
                Products Available
              </div>
            </div>

            <div className="border border-[#2A2F36] rounded-2xl px-6 py-6 text-center">
              <div
                className="text-3xl font-extrabold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Free
              </div>
              <div className="text-[#8B9199] text-sm mt-1">
                Delivery on ₹999+
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard
          icon={<Package className="w-5 h-5 text-[#5F8F82]" />}
          iconBg="bg-[#5F8F82]/15"
          value={totalItems}
          label="Cart Items"
          sub="In your bag"
        />

        <StatCard
          icon={<TrendingUp className="w-5 h-5 text-[#6E8FBF]" />}
          iconBg="bg-[#6E8FBF]/15"
          value={`$${totalPrice.toFixed(2)}`}
          label="Cart Value"
          sub="Ready to checkout"
        />

        <StatCard
          icon={<Star className="w-5 h-5 text-[#E3A23C]" />}
          iconBg="bg-[#E3A23C]/15"
          value="5"
          label="Top Products"
          sub="Highly rated"
        />

        <StatCard
          icon={<Tag className="w-5 h-5 text-[#B0708A]" />}
          iconBg="bg-[#B0708A]/15"
          value="4"
          label="Categories"
          sub="To explore"
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold" style={{ fontFamily: "'Fraunces', serif" }}>
          Shop by Category
        </h2>

        <button
          onClick={() => navigate("/shop")}
          className="text-[#E3A23C] text-sm font-medium flex items-center gap-1 hover:underline"
        >
          View All
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <CategoryCard
          name="Electronics"
          category="electronics"
        />

        <CategoryCard
          name="Men's Clothing"
          category="men's clothing"
        />

        <CategoryCard
          name="Women's Clothing"
          category="women's clothing"
        />

        <CategoryCard
          name="Jewelery"
          category="jewelery"
        />
      </div>
    </div>
  );
}

function StatCard({ icon, iconBg, value, label, sub }) {
  return (
    <div className="border border-[#2A2F36] bg-[#14181C] rounded-2xl p-5 flex items-center gap-4">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>

      <div>
        <div
          className="text-2xl font-bold leading-tight"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {value}
        </div>
        <div className="text-sm text-[#EFEAE1]">{label}</div>
        <div className="text-xs text-[#8B9199]">{sub}</div>
      </div>
    </div>
  );
}