import React, { useState, useEffect } from "react";
import img1 from "../assets/male-models-visual-photo-album-full-menly-vibes-collected-from-all-world.jpg";
import img2 from "../assets/young-woman-oversized-shirt-by-window.jpg";
import img3 from "../assets/luxury-jewelry-brand-advertisement-with-woman-model-shooting.jpg";

const WelcomePage = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="overflow-hidden font-dot relative h-screen">
      {/* Carousel */}
      <div className="animate-fadeInUp absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-40 text-white px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-100">
          Welcome to Larksper
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Explore trendy, high-quality products at unbeatable prices, with fast
          shipping and excellent customer service.
        </p>
        <a
          href="./products.js"
          className="mt-6 inline-block rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-center font-medium text-white hover:bg-indigo-700 transition duration-300"
        >
          Shop Collection
        </a>
      </div>
    </div>
  );
};

export default WelcomePage;
