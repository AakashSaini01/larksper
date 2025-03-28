"use client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import Women1 from "../assets/Women_clothes/Top_wear/id_1/beautiful-young-female-showing-thumb-up-while-blinking-blouse.jpg";
import Women2 from "../assets/Women_clothes/Top_wear/id_1/attractive-lady-showing-v-gesture-eye-blouse-looking-cheerful-front-view.jpg";
import Women3 from "../assets/Women_clothes/Top_wear/id_1/beautiful-young-female-looking-camera-blouse-looking-charming.jpg";
import Women4 from "../assets/Women_clothes/Top_wear/id_1/portrait-attractive-lady-pouting-lips-blouse-looking-confident-front-view.jpg";

// Sample product data - in a real app, this would come from your backend
const productData = {
  "women-1": {
    name: "V Gesture Eye Blouse",
    price: "$48",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        src: Women1,
        alt: "beautiful-young-female-showing-thumb-up-while-blinking-blouse.",
      },
      {
        src: Women2,
        alt: "attractive-lady-showing-v-gesture-eye-blouse-looking-cheerful-front-view.",
      },
      {
        src: Women3,
        alt: "beautiful-young-female-looking-camera-blouse-looking-charming.",
      },
      {
        src: Women4,
        alt: "portrait-attractive-lady-pouting-lips-blouse-looking-confident-front-view.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      "A beautiful young woman in a stylish blouse strikes a playful and confident pose. She gives a thumbs-up while winking, flashes a cheerful V-sign near her eye, and looks directly at the camera with charm and poise. Her expression shifts from a bright smile to a confident pout, exuding both energy and elegance.",
    highlights: [
      "Playful and confident design with stylish details",
      "Crafted for charm and elegance in every pose",
      "Soft, high-quality fabric for all-day comfort",
      "Thoughtfully tailored for a flattering fit",
    ],
    details:
      "This blouse embodies versatility and personality, perfect for any occasion. Whether flashing a cheerful V-sign, winking with confidence, or striking a poised look, its effortless style enhances your natural charm. Stay ahead of trends with exclusive colors and limited-edition releases.",
  },
  "women-2": {
    name: "Elegant Pleat Collar Blouse",
    price: "$35",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        src: Women2,
        alt: "elegant-pleat-collar-blouse",
      },
      {
        src: Women1,
        alt: "elegant-pleat-collar-blouse-front",
      },
      {
        src: Women3,
        alt: "elegant-pleat-collar-blouse-side",
      },
      {
        src: Women4,
        alt: "elegant-pleat-collar-blouse-back",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      "An elegant blouse featuring a sophisticated pleat collar design that adds a touch of refinement to any outfit. The carefully crafted pleats create a subtle texture that enhances the overall aesthetic while maintaining comfort and wearability.",
    highlights: [
      "Sophisticated pleat collar design",
      "Premium quality fabric",
      "Versatile styling options",
      "Comfortable fit for all-day wear",
    ],
    details:
      "This elegant blouse is designed for the modern woman who appreciates both style and comfort. The pleat collar adds a sophisticated touch while the carefully selected fabric ensures all-day comfort. Perfect for both professional and casual occasions.",
  },
  "men-1": {
    name: "Classic Fit Shirt",
    price: "$40",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        src: Women1,
        alt: "classic-fit-shirt",
      },
      {
        src: Women2,
        alt: "classic-fit-shirt-front",
      },
      {
        src: Women3,
        alt: "classic-fit-shirt-side",
      },
      {
        src: Women4,
        alt: "classic-fit-shirt-back",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      "A timeless classic fit shirt that combines traditional styling with modern comfort. The carefully tailored fit ensures a flattering silhouette while maintaining ease of movement.",
    highlights: [
      "Classic fit design",
      "Premium cotton fabric",
      "Traditional collar style",
      "Comfortable for all-day wear",
    ],
    details:
      "This classic fit shirt is a wardrobe essential that never goes out of style. Made from high-quality cotton, it offers both comfort and durability. The traditional collar and classic fit make it suitable for both formal and casual occasions.",
  },
};

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    // In a real app, this would be an API call
    const productInfo = productData[id];
    if (productInfo) {
      setProduct(productInfo);
      setSelectedColor(productInfo.colors[0]);
      setSelectedSize(productInfo.sizes[2]);
    }
  }, [id]);

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      fill="currentColor"
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  href={product.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="flex max-w-7xl mx-auto">
            <div className="mx-auto mt-6 max-w-3xl">
              <div className="grid grid-cols-2 gap-4">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    alt={image.alt}
                    src={image.src}
                    className="w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-6xl lg:gap-x-8 lg:px-8">
              <div className="lg:col-span-1">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
              </div>

              {/* Options */}
              <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:gap-x-8 lg:px-8 lg:pb-24 lg:row-span-1">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {product.price}
                </p>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            reviews.average > rating
                              ? "text-gray-900"
                              : "text-gray-200",
                            "size-5 shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>

                <form className="mt-10">
                  {/* Colors */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                    <fieldset aria-label="Choose a color" className="mt-4">
                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                        className="flex items-center gap-x-3"
                      >
                        {product.colors.map((color) => (
                          <Radio
                            key={color.name}
                            value={color}
                            aria-label={color.name}
                            className={classNames(
                              color.selectedClass,
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1"
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "size-8 rounded-full border border-black/10"
                              )}
                            />
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>
                  </div>

                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Size
                      </h3>
                      <div className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Size guide
                      </div>
                    </div>

                    <fieldset aria-label="Choose a size" className="mt-4">
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                      >
                        {product.sizes.map((size) => (
                          <Radio
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6"
                            )}
                          >
                            <span>{size.name}</span>
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>
                  </div>

                  <button
                    type="submit"
                    className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-60 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
