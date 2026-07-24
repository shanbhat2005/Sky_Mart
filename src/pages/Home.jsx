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

export default function Home() {
  const navigate = useNavigate();

  function handleShopClick() {
    navigate("/shop");
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-6 md:px-10 md:py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-800 p-8 md:p-12 mb-6 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] bg-black">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-yellow-400 text-sm font-semibold tracking-wide mb-4 flex items-center gap-2">
              GOOD EVENING <span>👋</span>
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Welcome back,
              <br />
              <span className="text-lime-400">shan!</span>
            </h1>

            <p className="text-gray-400 text-base mb-8 max-w-md">
              Discover today's picks — hand-curated products across
              electronics, fashion, and more.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={handleShopClick}
                className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-lime-300 transition"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="border border-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition">
                View All Products
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-64">
            <div className="bg-lime-950/60 border border-lime-900 rounded-2xl px-6 py-6 text-center">
              <div className="text-4xl font-extrabold text-lime-400">20+</div>
              <div className="text-gray-300 text-sm mt-1">
                Products Available
              </div>
            </div>

            <div className="border border-gray-700 rounded-2xl px-6 py-6 text-center">
              <div className="text-3xl font-extrabold">Free</div>
              <div className="text-gray-400 text-sm mt-1">
                Delivery on ₹999+
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard
          icon={<Package className="w-5 h-5 text-lime-400" />}
          iconBg="bg-lime-950"
          value="0"
          label="Cart Items"
          sub="In your bag"
        />

        <StatCard
          icon={<TrendingUp className="w-5 h-5 text-blue-400" />}
          iconBg="bg-blue-950"
          value="$0.00"
          label="Cart Value"
          sub="Ready to checkout"
        />

        <StatCard
          icon={<Star className="w-5 h-5 text-orange-400" />}
          iconBg="bg-orange-950"
          value="5"
          label="Top Products"
          sub="Highly rated"
        />

        <StatCard
          icon={<Tag className="w-5 h-5 text-purple-400" />}
          iconBg="bg-purple-950"
          value="6"
          label="Categories"
          sub="To explore"
        />
      </div>

      {/* Category Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Shop by Category</h2>

        <button
          onClick={() => navigate("/shop")}
          className="text-lime-400 text-sm font-medium flex items-center gap-1 hover:underline"
        >
          View All
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Category Cards */}
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
    <div className="border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>

      <div>
        <div className="text-2xl font-bold leading-tight">{value}</div>
        <div className="text-sm text-gray-200">{label}</div>
        <div className="text-xs text-gray-500">{sub}</div>
      </div>
    </div>
  );
}