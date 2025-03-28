import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import cropSweater from "../assets/crop-sweater.jpg";
import baggyShirt from "../assets/baggy-shirt.jpg";
import whiteShirt from "../assets/cotton-off-white-shirt.jpg";
import darkFlorish from "../assets/dark-florish-onepiece.jpg";

const products = [
  {
    name: "Women",
    posts: [
      {
        id: 1,
        title: "Crop Sweater",
        href: "#",
        price: "$48",
        imageSrc: cropSweater,
        imageAlt: "Crop Sweater",
      },
    ],
  },
  {
    name: "Men",
    posts: [
      {
        id: 2,
        title: "Baggy Shirt",
        href: "#",
        price: "$35",
        imageSrc: baggyShirt,
        imageAlt: "Baggy Shirt",
      },
    ],
  },
  {
    name: "Accessories",
    posts: [
      {
        id: 3,
        title: "Cotton off White Shirt",
        href: "#",
        price: "$89",
        imageSrc: whiteShirt,
        imageAlt: "Cotton off White Shirt",
      },
    ],
  },
  {
    name: "Jewelleries",
    posts: [
      {
        id: 4,
        title: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc: darkFlorish,
        imageAlt: "Machined Mechanical Pencil",
      },
    ],
  },
];

export default function PopularCat() {
  return (
    <div className="bg-white flex justify-center mt-12 pt-10 px-4">
      <div className="w-full">
        <div className="bg-white mb-5 max-w-7xl mx-auto items-center justify-center text-center">
          <h2 className="text-2xl text-gray-800 font-dot uppercase font-bold">
            Popular Products
          </h2>
        </div>
        <TabGroup>
          <TabList className="flex text-center items-center m-10">
            {products.map(({ name }) => (
              <Tab
                key={name}
                className="p-5 text-2xl font-semibold text-gray-500 focus:outline-none w-full text-center 
                         border-b-4 border-gray-400 data-[selected]:border-t-4 data-[selected]:border-l-4 
                         data-[selected]:border-r-4 data-[selected]:text-gray-900 data-[selected]:border-gray-400 data-[selected]:border-b-white 
                         data-[focus]:outline-1 data-[focus]:outline-gray-900 rounded-t-3xl"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {products.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl p-3">
                <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-sm transition hover:bg-white/5"
                    >
                      <a href={post.href} className="block">
                        <img
                          src={post.imageSrc}
                          alt={post.imageAlt}
                          className="aspect-square w-full font-medium rounded-lg object-cover group-hover:scale-95 xl:aspect-7/8"
                        />
                        <h3 className="mt-4 text-base font-semibold capitalize text-gray-700">
                          {post.title}
                        </h3>
                        <p className="mt-1 text-base font-medium text-gray-900">
                          {post.price}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
