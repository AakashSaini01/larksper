"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Men from "../assets/shop-for-men.jpg";
import Women from "../assets/shop-for-women.jpg";
import Jwellery from "../assets/shop-for-jewlleries.jpg";
import Accessories from "../assets/fashion-luxurious-arrangement-table.jpg";

const initialCategories = [
  { id: "men", image: Men, title: "Men", rating: 5 },
  { id: "women", image: Women, title: "Women", rating: 5 },
  { id: "accessories", image: Accessories, title: "Accessories", rating: 4.3 },
  { id: "jewellery", image: Jwellery, title: "Jewellery", rating: 4.3 },
];

export default function Categories() {
  const [categories, setCategories] = useState(initialCategories);

  useEffect(() => {
    const interval = setInterval(() => {
      setCategories((prev) => shuffle([...prev]));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen font-dot flex justify-center items-center">
      <div className="max-w-4xl mx-auto p-4 grid grid-cols-2 gap-4">
        <div className="col-span-2 flex justify-center">
          <h1 className="text-3xl mb-6 font-bold text-center text-gray-800">
            Find With Categories
          </h1>
        </div>

        {categories.map((category) => (
          <motion.div
            key={category.id}
            layout
            transition={spring}
            className="relative h-64 bg-white shadow-md rounded-lg overflow-hidden group"
          >
            <img
              src={category.image}
              alt={`Clothing Collection ${category.title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white text-orange-600 font-bold text-sm px-2 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition duration-300">
              ⭐ {category.rating}
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="font-bold text-lg">{category.title}</h2>
              <p className="text-sm">Best Collection</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};
