import larksper from "../assets/single-image-2.jpg";

export default function WhyLarksper() {
  return (
    <div
      className="flex items-center mt-20 p-20 justify-center min-h-svh"
      style={{ backgroundColor: "#F1F1F0" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src={larksper}
            alt="Classic Winter Collection"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col p-8">
          <h2 className="text-5xl mt-14 font-dot text-start">
            CLASSIC WINTER COLLECTION
          </h2>
          <p className="text-gray-600 text-justify pr-5 mt-8">
            Larksper delivers timeless, sustainable fashion crafted with premium
            quality and eco-conscious practices. Our inclusive designs cater to
            all styles and sizes, celebrating individuality. With a
            customer-first approach, we ensure seamless shopping, confidence,
            and care for the planet.
          </p>
          <button className="px-3 py-3 max-w-64 mt-6 mb-14 text-white bg-black rounded-lg hover:bg-gray-800 transition">
            SHOP COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
}
