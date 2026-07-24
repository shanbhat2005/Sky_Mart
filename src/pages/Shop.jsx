import React, { useContext, useState } from "react";
import { Search } from "lucide-react";
import { Product } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router";

export default function Shop() {
  const { products } = useContext(Product);
  const location = useLocation();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(location.state?.category || "all");
  const [sort, setSort] = useState("");

  let filteredProducts = [...products];

  // Search
  filteredProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Category
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  // Sorting
  if (sort === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-6 md:px-10 md:py-8">

      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          All Products
        </h1>

        <p className="text-gray-400">
          {filteredProducts.length} products found
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 border border-gray-800 rounded-2xl p-3 mb-8">

        <div className="flex items-center gap-3 bg-neutral-900 rounded-xl px-4 py-3 flex-1">
          <Search className="w-4 h-4 text-gray-500" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-white w-full"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-neutral-900 rounded-xl px-4 py-3 text-white"
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-neutral-900 rounded-xl px-4 py-3 text-white"
        >
          <option value="">Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="rating">Most Rated</option>
        </select>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}