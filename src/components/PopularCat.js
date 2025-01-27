import cropSweater from "../assets/crop-sweater.jpg";
import baggyShirt from "../assets/baggy-shirt.jpg";
import whiteShirt from "../assets/cotton-off-white-shirt.jpg";
import darkFlorish from "../assets/dark-florish-onepiece.jpg";

const products = [
  {
    id: 1,
    name: "Crop Sweater",
    href: "#",
    price: "$48",
    imageSrc: cropSweater,
    imageAlt: "Crop Sweater",
  },
  {
    id: 2,
    name: "Baggy Shirt",
    href: "#",
    price: "$35",
    imageSrc: baggyShirt,
    imageAlt: "Baggy Shirt",
  },
  {
    id: 3,
    name: "Cotton off White Shirt",
    href: "#",
    price: "$89",
    imageSrc: whiteShirt,
    imageAlt: "Cotton off White Shirt",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: darkFlorish,
    imageAlt: "Machined Mechanical Pencil",
  },
];

export default function PopularCat() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="bg-white flex">
          <h2 className="text-2xl text-start flex font-dot uppercase text-gray:text-gray-900">
            Popular Categories
          </h2>
          <p className="text-sm text-end flex font-dot uppercase text-gray:text-gray-900 underline">
            view all products
          </p>
        </div>
        {/* <h2 className="font-2xl">Products</h2> */}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full font-medium rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
