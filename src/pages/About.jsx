import React from "react";
import { useNavigate } from "react-router";
import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const stats = [
  { icon: Package, value: "20K+", label: "Products" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
  { icon: Truck, value: "99%", label: "On-time Delivery" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: Truck,
    title: "Speed",
    description:
      "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    icon: HeartHandshake,
    title: "Community",
    description:
      "Built around real customer feedback, not just business metrics.",
  },
  {
    icon: Star,
    title: "Quality",
    description: "We curate the best — no filler, no junk, just great products.",
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-16 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-lime-400 flex items-center justify-center mx-auto mb-8">
            <Zap className="w-7 h-7 text-black fill-black" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-lime-400">SkyMart</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="border border-gray-800 rounded-2xl px-6 py-8 text-center"
            >
              <Icon className="w-5 h-5 text-lime-400 mx-auto mb-3" />
              <div className="text-2xl font-extrabold">{value}</div>
              <div className="text-gray-500 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="border border-gray-800 rounded-3xl p-8 md:p-10 mt-8">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>

          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked
              ourselves: what if shopping online was actually{" "}
              <em>enjoyable</em>?
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across
              the country. We stock electronics, fashion, jewelry, and
              everyday essentials — all at prices that don't require a
              second mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-16 mb-8">
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border border-gray-800 rounded-2xl p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-lime-950 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-lime-400" />
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-lime-900 rounded-3xl text-center py-14 px-6 mt-16">
          <h2 className="text-3xl font-extrabold mb-3">Ready to shop?</h2>

          <p className="text-gray-400 mb-8">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="bg-lime-400 text-black font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2 hover:bg-lime-300 transition"
          >
            Browse Products
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-900">
          <p className="text-lime-400 font-bold text-lg mb-1">SkyMart</p>
          <p className="text-gray-600 text-sm">
            © 2025 SkyMart. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}