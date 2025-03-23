"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Men from "../assets/male-models-visual-photo.jpeg";
import Women from "../assets/young-woman-with-blue-hedragea-buquet-blue-dress-standing-green-garden-sunset.jpg";
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen font-dot flex justify-center items-center">
      <div className="max-w-4xl mx-auto p-4 grid grid-cols-2 gap-4">
        <div className="col-span-2 flex justify-center">
          <h1 className="text-3xl mb-6 font-bold text-center text-gray-800">
            Categories
          </h1>
        </div>

        <AnimatePresence>
          {categories.map((category) => (
            <Link key={category.id} to={`/products/${category.id}`}>
              <motion.div
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
                className="relative h-64 bg-white shadow-md rounded-lg overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={category.image}
                  alt={`Clothing Collection ${category.title}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="absolute top-4 left-4 bg-white text-orange-600 font-bold text-sm px-2 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  ⭐ {category.rating}
                </motion.div>

                <motion.div className="absolute bottom-4 left-4 text-white group-hover:text-white group-hover:font-bold group-hover:text-lg transition-all duration-400">
                  <h2 className="text-lg group-hover:text-2xl">
                    {category.title}
                  </h2>
                  <p className="text-sm group-hover:text-base">{`Best Collection`}</p>
                </motion.div>

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
