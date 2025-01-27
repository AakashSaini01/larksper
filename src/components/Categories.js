import Men from "../assets/shop-for-men.jpg";
import Women from "../assets/shop-for-women.jpg";
import Jwellery from "../assets/shop-for-jewlleries.jpg";

export default function Categories() {
  return (
    <div className="h-screen font-dot flex justify-center items-center">
      <div className="max-w-4xl mx-auto p-4 grid grid-cols-2 gap-4">
        {/* Top Section */}
        <div className="col-span-2 flex justify-center">
          <h1 className="text-3xl mb-6 font-bold text-center text-gray-800">
            Find With Categories
          </h1>
        </div>

        {/* Category Items */}
        <div className="relative animate-fadeinleft row-span-2 h-[calc(97%+1rem)] bg-white shadow-md rounded-lg overflow-hidden group">
          <img
            src={Men}
            alt="Clothing Collection Men"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white text-orange-600 font-bold text-sm px-2 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition duration-300">
            ⭐ 4.5
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="font-bold text-lg">Men</h2>
            <p className="text-sm">Clothing Collection</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
        </div>

        <div className="relative animate-fadeindown h-64 bg-white shadow-md rounded-lg overflow-hidden group">
          <img
            src={Women}
            alt="Clothing Collection Women"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white text-orange-600 font-bold text-sm px-2 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition duration-300">
            ⭐ 5
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="font-bold text-lg">Women</h2>
            <p className="text-sm">Clothing Collection</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
        </div>

        <div className="relative animate-fadeinright h-64 bg-white shadow-md rounded-lg overflow-hidden group">
          <img
            src={Jwellery}
            alt="Clothing Collection Jwellery"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white text-orange-600 font-bold text-sm px-2 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition duration-300">
            ⭐ 4.3
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="font-bold text-lg">Jwellery</h2>
            <p className="text-sm">Clothing Collection</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
        </div>
      </div>
    </div>
  );
}
